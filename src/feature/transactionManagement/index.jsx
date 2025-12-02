import { useState, useEffect } from 'react';
import TransactionManagementHeading from './components/TransactionManagementHeading';
import TransactionManagementTable from './components/TransactionManagementTable';
import { Box } from '@mui/material';
import axiosInstance from '../../api/axios';
import { useAppDispatch } from '../../store/hooks';
import { showLoader, hideLoader } from '../../store/slices/loaderSlice';
import useToast from '../../hooks/useToast';

const TransactionManagement = () => {
  const dispatch = useAppDispatch();
  const { showError } = useToast();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      dispatch(showLoader('Loading transactions...'));

      const response = await axiosInstance.get('/getTransaction');
      
      // Transform API response to match table structure
      const transformedTransactions = response.data?.data?.docs || [];
      setTransactions(transformedTransactions);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to load transactions. Please try again.';
      showError(errorMessage);
      console.error('Error fetching transactions:', error);
    } finally {
      setLoading(false);
      dispatch(hideLoader());
    }
  };

  return (
    <Box>
      <TransactionManagementHeading />
      <TransactionManagementTable 
        transactions={transactions} 
        loading={loading}
        onRefresh={fetchTransactions}
      />
    </Box>
  );
};

export default TransactionManagement;


