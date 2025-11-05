import { Box } from '@mui/material';
import EditNotificationHeader from '../editNotification/components/EditNotificationHeader';
import EditNotificationForm from '../editNotification/components/EditNotificationForm';

const AddPush = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <EditNotificationHeader />
      <EditNotificationForm />
    </Box>
  );
};

export default AddPush;



