import { Box } from '@mui/material';
import UserDetailHeader from './components/UserDetailHeader';
import UserProfileSection from './components/UserProfileSection';
import ActionButtonsGrid from './components/ActionButtonsGrid';

const UserDetail = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <UserDetailHeader />
      
      <Box sx={{ mb: '2rem' }}>
        <UserProfileSection />
      </Box>

      <Box>
        <ActionButtonsGrid />
      </Box>
    </Box>
  );
};

export default UserDetail;


