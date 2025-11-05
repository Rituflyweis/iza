import { Box } from '@mui/material';
import InventoryManagementHeading from './components/InventoryManagementHeading';
import InventoryManagementTable from './components/InventoryManagementTable';

const InventoryManagement = () => {
  return (
    <Box>
      <InventoryManagementHeading />
      <InventoryManagementTable />
    </Box>
  );
};

export default InventoryManagement;



