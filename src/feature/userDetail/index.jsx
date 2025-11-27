import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import UserDetailHeader from './components/UserDetailHeader';
import UserProfileSection from './components/UserProfileSection';
import ActionButtonsGrid from './components/ActionButtonsGrid';
import axiosInstance from '../../api/axios';
import { useAppDispatch } from '../../store/hooks';
import { showLoader, hideLoader } from '../../store/slices/loaderSlice';
import useToast from '../../hooks/useToast';

const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { showError } = useToast();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchUserDetails();
    }
  }, [id]);

  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      dispatch(showLoader('Loading user details...'));

      const response = await axiosInstance.get(`/User/${id}`);
      
      setUserData(response.data?.data || response.data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to load user details. Please try again.';
      showError(errorMessage);
      console.error('Error fetching user details:', error);
    } finally {
      setLoading(false);
      dispatch(hideLoader());
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <UserDetailHeader />
      
      <Box sx={{ mb: '2rem' }}>
        <UserProfileSection userData={userData} loading={loading} />
      </Box>

      <Box>
        <ActionButtonsGrid />
      </Box>
    </Box>
  );
};

export default UserDetail;


