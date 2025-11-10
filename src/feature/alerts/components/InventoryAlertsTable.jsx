import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, Chip } from '@mui/material';
import { Icon } from '@iconify/react';

const rows = [
  { id: 1, product: 'Lipstick', sku: 'L123', current: 5, threshold: 10, status: 'Low Stock', icon: 'mdi:alert' },
  { id: 2, product: 'Foundation', sku: 'F456', current: 3, threshold: 10, status: 'Moderate', icon: 'mdi:alert-circle-outline' },
  { id: 3, product: 'Lipstick', sku: 'L123', current: 0, threshold: 10, status: 'Out of stock', icon: 'mdi:close-octagon-outline' },
  { id: 4, product: 'Lipstick', sku: 'F456', current: 3, threshold: 10, status: 'Moderate', icon: 'mdi:alert-circle-outline' },
  { id: 5, product: 'Lipstick', sku: 'L123', current: 5, threshold: 10, status: 'Low Stock', icon: 'mdi:alert' },
  { id: 6, product: 'Lipstick', sku: 'F456', current: 3, threshold: 10, status: 'Moderate', icon: 'mdi:alert-circle-outline' },
  { id: 7, product: 'Lipstick', sku: 'L125', current: 0, threshold: 10, status: 'Out of stock', icon: 'mdi:close-octagon-outline' },
];

const InventoryAlertsTable = () => {
  return (
    <Box>
      <TableContainer component={Paper} sx={{ borderRadius: '0.75rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No.</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Current Stock</TableCell>
              <TableCell>Threshold</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r, idx) => (
              <TableRow key={r.id}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{r.product}</TableCell>
                <TableCell>{r.sku}</TableCell>
                <TableCell>{r.current}</TableCell>
                <TableCell>{r.threshold}</TableCell>
                <TableCell>
                  <Chip
                    icon={<Icon icon={r.icon} />}
                    label={r.status}
                    variant="outlined"
                    sx={{ borderColor: '#E5E7EB', color: '#111827' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Pagination count={5} page={1} color="secondary" sx={{ '& .Mui-selected': { bgcolor: '#F8069D', color: '#fff' } }} />
      </Box>
    </Box>
  );
};

export default InventoryAlertsTable;








