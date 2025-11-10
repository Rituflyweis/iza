import { Box } from '@mui/material';
import AddVideoHeader from './components/AddVideoHeader';
import AddVideoForm from './components/AddVideoForm';

const AddVideo = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <AddVideoHeader />
      <AddVideoForm />
    </Box>
  );
};

export default AddVideo;








