import { Box } from '@mui/material';
import InventoryDetailHeader from './components/InventoryDetailHeader';
import InventoryDetailForm from './components/InventoryDetailForm';

const InventoryDetail = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <InventoryDetailHeader />
      <InventoryDetailForm />
    </Box>
  );
};

export default InventoryDetail;



