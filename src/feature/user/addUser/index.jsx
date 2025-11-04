import { Box } from '@mui/material';
import CreateUserHeader from './components/CreateUserHeader';
import CreateUserForm from './components/CreateUserForm';

const AddUser = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <CreateUserHeader />
      <CreateUserForm />
    </Box>
  );
};

export default AddUser;
