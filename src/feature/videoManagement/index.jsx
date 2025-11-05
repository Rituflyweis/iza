import VideoManagementHeading from './components/VideoManagementHeading';
import VideoManagementTable from './components/VideoManagementTable';
import { Box } from '@mui/material';

const VideoManagement = () => {
  return (
    <Box>
      <VideoManagementHeading />
      <VideoManagementTable />
    </Box>
  );
};

export default VideoManagement;


