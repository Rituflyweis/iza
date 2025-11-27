import { Box } from '@mui/material';
import CreateUserHeader from './components/CreateUserHeader';
import CreateUserForm from './components/CreateUserForm';

const AddUser = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <CreateUserHeader />
      <Box sx={{ mt: '2rem' }}>
        <CreateUserForm />
      </Box>
    </Box>
  );
};

export default AddUser;