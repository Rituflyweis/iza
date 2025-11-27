import { useState, useEffect, useRef } from 'react';
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
  const abortControllerRef = useRef(null);

  useEffect(() => {
    fetchTransactions();
    
    // Cleanup: cancel any pending requests on unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const fetchTransactions = async () => {
    // Cancel previous request if it exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new AbortController for this request
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      setLoading(true);
      dispatch(showLoader('Loading transactions...'));

      const response = await axiosInstance.get('/getTransaction', {
        signal: abortController.signal
      });
      
      // Check if request was aborted
      if (abortController.signal.aborted) {
        return;
      }
      
      // Transform API response to match table structure
      const transformedTransactions = response.data?.data?.docs || [];
      setTransactions(transformedTransactions);
    } catch (error) {
      // Don't show error for canceled requests
      if (
        error.name === 'CanceledError' || 
        error.code === 'ERR_CANCELED' ||
        error.message?.toLowerCase().includes('canceled') ||
        abortController.signal.aborted
      ) {
        return;
      }

      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to load transactions. Please try again.';
      showError(errorMessage);
      console.error('Error fetching transactions:', error);
    } finally {
      // Only update loading state if request wasn't aborted
      if (!abortController.signal.aborted) {
        setLoading(false);
        dispatch(hideLoader());
      }
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


