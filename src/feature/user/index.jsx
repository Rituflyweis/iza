import UserManagementHeading from './components/UserManagementHeading';
import UserManagementTable from './components/UserManagementTable';
import { Box } from '@mui/material';

const UserManagement = () => {
  return (
    <Box>
      <UserManagementHeading />
      <UserManagementTable />
    </Box>
  );
};

export default UserManagement;
