import { useState, useEffect } from 'react';
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

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      setLoading(true);
      dispatch(showLoader('Loading users...'));

      const response = await axiosInstance.get('/userList');
      
      // Transform API response to match table structure
      const transformedUsers = response.data?.data || response.data || [];
      setUsers(transformedUsers);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to load users. Please try again.';
      showError(errorMessage);
      console.error('Error fetching user list:', error);
    } finally {
      setLoading(false);
      dispatch(hideLoader());
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
