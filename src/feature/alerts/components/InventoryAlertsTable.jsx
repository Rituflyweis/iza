import { useState, useEffect } from 'react';
import { Box, Chip, Typography, CircularProgress } from '@mui/material';
import { Icon } from '@iconify/react';
import axiosInstance from '../../../api/axios';
import useToast from '../../../hooks/useToast';
import { CustomTable } from '../../../components';

const InventoryAlertsTable = () => {
  const { showError } = useToast();
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchInventoryAlerts();
  }, [page]);

  const fetchInventoryAlerts = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.get('/Alerts/getInventoryAlerts', {
        params: {
          page: page,
          limit: 10,
        },
      });
      
      // Transform API response to match table structure
      const responseData = response.data?.data || response.data;
      
      if (Array.isArray(responseData)) {
        setAlerts(responseData);
        // If API returns pagination info
        if (response.data?.pagination) {
          setTotalPages(response.data.pagination.totalPages || 1);
        }
      } else if (responseData?.alerts || responseData?.inventoryAlerts) {
        setAlerts(responseData.alerts || responseData.inventoryAlerts);
        setTotalPages(responseData.totalPages || responseData.pagination?.totalPages || 1);
      } else {
        setAlerts([]);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to load inventory alerts. Please try again.';
      showError(errorMessage);
      console.error('Error fetching inventory alerts:', error);
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  };

  // Transform API alert data to match table structure
  const transformAlert = (alert, index) => {
    // Determine status based on current stock and threshold
    const currentStock = alert.currentStock || alert.current || alert.quantity || 0;
    const threshold = alert.threshold || alert.minThreshold || 10;
    
    let status = 'Moderate';
    let icon = 'mdi:alert-circle-outline';
    
    if (currentStock === 0) {
      status = 'Out of stock';
      icon = 'mdi:close-octagon-outline';
    } else if (currentStock < threshold) {
      status = 'Low Stock';
      icon = 'mdi:alert';
    }

    return {
      id: alert._id || alert.id,
      serialNumber: index + 1 + (page - 1) * 10,
      product: alert.productName || alert.product || alert.name || 'N/A',
      sku: alert.sku || alert.SKU || alert.productSku || 'N/A',
      current: currentStock,
      threshold: threshold,
      status: alert.status || status,
      statusIcon: alert.icon || icon,
    };
  };

  const transformedAlerts = alerts.map((alert, index) => transformAlert(alert, index));

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Define table columns
  const columns = [
    {
      id: 'serialNumber',
      label: 'S.No.',
      align: 'left',
    },
    {
      id: 'product',
      label: 'Product Name',
      align: 'left',
    },
    {
      id: 'sku',
      label: 'SKU',
      align: 'left',
    },
    {
      id: 'current',
      label: 'Current Stock',
      align: 'left',
    },
    {
      id: 'threshold',
      label: 'Threshold',
      align: 'left',
    },
    {
      id: 'status',
      label: 'Status',
      align: 'left',
      render: (row) => (
        <Chip
          icon={<Icon icon={row.statusIcon} />}
          label={row.status}
          variant="outlined"
          sx={{ borderColor: '#E5E7EB', color: '#111827' }}
        />
      ),
    },
  ];

  if (loading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: '3rem' }}>
        <CircularProgress size={40} sx={{ color: '#F8069D' }} />
        <Typography sx={{ mt: '1rem', color: '#5A6678' }}>Loading inventory alerts...</Typography>
      </Box>
    );
  }

  if (transformedAlerts.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: '3rem' }}>
        <Typography sx={{ color: '#5A6678' }}>No inventory alerts found</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <CustomTable
        columns={columns}
        rows={transformedAlerts}
        serverSidePagination={true}
        currentPage={page - 1}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default InventoryAlertsTable;



















