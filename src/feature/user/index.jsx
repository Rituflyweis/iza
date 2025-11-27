import { useState, useEffect, useRef } from 'react';
import UserManagementHeading from './components/UserManagementHeading';
import UserManagementTable from './components/UserManagementTable';
import { Box } from '@mui/material';
import axiosInstance from '../../api/axios';
import { useAppDispatch } from '../../store/hooks';
import { showLoader, hideLoader } from '../../store/slices/loaderSlice';
import useToast from '../../hooks/useToast';

const UserManagement = () => {
  const dispatch = useAppDispatch();
  const { showError, showSuccess } = useToast();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    fetchUserList();
    
    // Cleanup: cancel any pending requests on unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const fetchUserList = async () => {
    // Cancel previous request if it exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new AbortController for this request
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      setLoading(true);
      dispatch(showLoader('Loading users...'));

      const response = await axiosInstance.get('/userList', {
        signal: abortController.signal
      });
      
      // Check if request was aborted
      if (abortController.signal.aborted) {
        return;
      }
      
      // Transform API response to match table structure
      const transformedUsers = response.data?.data || response.data || [];
      setUsers(transformedUsers);
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
        'Failed to load users. Please try again.';
      showError(errorMessage);
      console.error('Error fetching user list:', error);
    } finally {
      // Only update loading state if request wasn't aborted
      if (!abortController.signal.aborted) {
        setLoading(false);
        dispatch(hideLoader());
      }
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      dispatch(showLoader('Deleting user...'));

      await axiosInstance.delete(`/User/${userId}`);

      showSuccess('User deleted successfully!');
      
      // Refresh the user list after successful deletion
      await fetchUserList();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to delete user. Please try again.';
      showError(errorMessage);
      console.error('Error deleting user:', error);
    } finally {
      dispatch(hideLoader());
    }
  };

  return (
    <Box>
      <UserManagementHeading />
      <UserManagementTable 
        users={users} 
        loading={loading} 
        onDeleteUser={handleDeleteUser}
        onRefresh={fetchUserList}
      />
    </Box>
  );
};

export default UserManagement;
