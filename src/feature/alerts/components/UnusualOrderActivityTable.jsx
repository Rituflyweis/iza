import { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import axiosInstance from '../../../api/axios';
import { useAppDispatch } from '../../../store/hooks';
import { showLoader, hideLoader } from '../../../store/slices/loaderSlice';
import useToast from '../../../hooks/useToast';
import { CustomTable } from '../../../components';

const UnusualOrderActivityTable = () => {
  const dispatch = useAppDispatch();
  const { showError } = useToast();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchUnusualOrderActivity();
  }, [page]);

  const fetchUnusualOrderActivity = async () => {
    try {
      setLoading(true);
      dispatch(showLoader('Loading unusual order activity...'));

      const response = await axiosInstance.get('/Alerts/getUnUsualOrderActivity', {
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
      } else if (responseData?.unusualOrders || responseData?.orders || responseData?.data) {
        setData(responseData.unusualOrders || responseData.orders || responseData.data);
        setTotalPages(responseData.totalPages || responseData.pagination?.totalPages || 1);
      } else {
        setData([]);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to load unusual order activity. Please try again.';
      showError(errorMessage);
      console.error('Error fetching unusual order activity:', error);
      setData([]);
    } finally {
      setLoading(false);
      dispatch(hideLoader());
    }
  };

  // Transform API data to match table structure
  const transformData = (item, index) => {
    // Format date if needed
    const formatDate = (dateString) => {
      if (!dateString) return 'N/A';
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
      } catch {
        return dateString;
      }
    };

    // Format currency
    const formatCurrency = (value) => {
      if (typeof value === 'number') {
        return `Rs.${value}`;
      }
      if (typeof value === 'string' && value.includes('Rs.')) {
        return value;
      }
      return value ? `Rs.${value}` : 'Rs.0';
    };

    return {
      id: item._id || item.id || index,
      customer: item.customer || item.customerName || item.userName || item.name || 'N/A',
      orderId: item.orderId || item.order_id || item._id || item.id || 'N/A',
      value: formatCurrency(item.value || item.orderValue || item.totalAmount || item.amount || 0),
      qty: item.qty || item.quantity || item.orderQuantity || 0,
      reason: item.reason || item.reasonForAlert || item.alertReason || item.description || 'N/A',
      date: formatDate(item.date || item.orderDate || item.createdAt || item.created_at),
    };
  };

  const transformedData = data.map((item, index) => transformData(item, index));

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Define table columns
  const columns = [
    {
      id: 'customer',
      label: 'Customer Name',
      align: 'left',
    },
    {
      id: 'orderId',
      label: 'Order ID',
      align: 'left',
    },
    {
      id: 'value',
      label: 'Order Value',
      align: 'left',
    },
    {
      id: 'qty',
      label: 'Order Quantity',
      align: 'left',
    },
    {
      id: 'reason',
      label: 'Reason for Alert',
      align: 'left',
    },
    {
      id: 'date',
      label: 'Order Date',
      align: 'left',
    },
  ];

  if (loading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: '3rem' }}>
        <CircularProgress size={40} sx={{ color: '#F8069D' }} />
        <Typography sx={{ mt: '1rem', color: '#5A6678' }}>Loading unusual order activity...</Typography>
      </Box>
    );
  }

  if (transformedData.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: '3rem' }}>
        <Typography sx={{ color: '#5A6678' }}>No unusual order activity found</Typography>
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

export default UnusualOrderActivityTable;



















