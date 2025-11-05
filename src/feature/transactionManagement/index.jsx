import TransactionManagementHeading from './components/TransactionManagementHeading';
import TransactionManagementTable from './components/TransactionManagementTable';
import { Box } from '@mui/material';

const TransactionManagement = () => {
  return (
    <Box>
      <TransactionManagementHeading />
      <TransactionManagementTable />
    </Box>
  );
};

export default TransactionManagement;


