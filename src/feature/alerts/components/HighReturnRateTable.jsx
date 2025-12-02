import { useState, useEffect } from 'react';
import { Box, IconButton, Typography, CircularProgress } from '@mui/material';
import { Icon } from '@iconify/react';
import axiosInstance from '../../../api/axios';
import { useAppDispatch } from '../../../store/hooks';
import { showLoader, hideLoader } from '../../../store/slices/loaderSlice';
import useToast from '../../../hooks/useToast';
import { CustomTable } from '../../../components';

const HighReturnRateTable = () => {
  const dispatch = useAppDispatch();
  const { showError } = useToast();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchHighReturnRate();
  }, [page]);

  const fetchHighReturnRate = async () => {
    try {
      setLoading(true);
      dispatch(showLoader('Loading high return rate data...'));

      const response = await axiosInstance.get('/Alerts/getHighReturnRate', {
        params: {
          page: page,
          limit: 10,
        },
      });
      
      // Transform API response to match table structure
      const responseData = response.data?.data || response.data;
      
      if (Array.isArray(responseData)) {
        setData(responseData);
        // If API returns pagination info
        if (response.data?.pagination) {
          setTotalPages(response.data.pagination.totalPages || 1);
        }
      } else if (responseData?.highReturnRate || responseData?.returns || responseData?.data) {
        setData(responseData.highReturnRate || responseData.returns || responseData.data);
        setTotalPages(responseData.totalPages || responseData.pagination?.totalPages || 1);
      } else {
        setData([]);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to load high return rate data. Please try again.';
      showError(errorMessage);
      console.error('Error fetching high return rate:', error);
      setData([]);
    } finally {
      setLoading(false);
      dispatch(hideLoader());
    }
  };

  // Transform API data to match table structure
  const transformData = (item, index) => {
    return {
      id: item._id || item.id || index,
      name: item.name || item.userName || item.fullName || item.customerName || 'N/A',
      userId: item.userId || item.user_id || item._id || item.id || 'N/A',
      totalOrders: item.totalOrders || item.total_orders || item.orders || 0,
      returnRate: item.returnRate || item.return_rate || item.rate || '0%',
      units: item.units || item.unitsReturned || item.returned_units || item.returns || 0,
    };
  };

  const transformedData = data.map((item, index) => transformData(item, index));

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Define table columns
  const columns = [
    {
      id: 'name',
      label: 'User Name',
      align: 'left',
    },
    {
      id: 'userId',
      label: 'User ID',
      align: 'left',
    },
    {
      id: 'totalOrders',
      label: 'Total Orders',
      align: 'left',
    },
    {
      id: 'returnRate',
      label: 'Return Rate',
      align: 'left',
    },
    {
      id: 'units',
      label: 'Units Returned',
      align: 'left',
    },
    {
      id: 'actions',
      label: 'Actions',
      align: 'left',
      render: (row) => (
        <IconButton size="small">
          <Icon icon="mdi:dots-vertical" width={20} height={20} />
        </IconButton>
      ),
    },
  ];

  if (loading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: '3rem' }}>
        <CircularProgress size={40} sx={{ color: '#F8069D' }} />
        <Typography sx={{ mt: '1rem', color: '#5A6678' }}>Loading high return rate data...</Typography>
      </Box>
    );
  }

  if (transformedData.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: '3rem' }}>
        <Typography sx={{ color: '#5A6678' }}>No high return rate data found</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <CustomTable
        columns={columns}
        rows={transformedData}
        serverSidePagination={true}
        currentPage={page - 1}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default HighReturnRateTable;



















