import { Box } from '@mui/material';
import AddSmsHeader from './components/AddSmsHeader';
import AddSmsForm from './components/AddSmsForm';

const AddSms = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <AddSmsHeader />
      <AddSmsForm />
    </Box>
  );
};

export default AddSms;



