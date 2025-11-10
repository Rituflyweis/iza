import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination } from '@mui/material';

const rows = [
  { id: 1, customer: 'Wade Warren', orderId: '12345655', value: 'Rs.200', qty: 20, reason: 'Bulk purchase', date: 'DD-MM-YYYY' },
  { id: 2, customer: 'Jacob Jones', orderId: '12345655', value: 'Rs.200', qty: 20, reason: 'Suspicious payment method', date: 'DD-MM-YYYY' },
  { id: 3, customer: 'Arlene McCoy', orderId: '12345655', value: 'Rs.200', qty: 20, reason: 'Bulk purchase', date: 'DD-MM-YYYY' },
  { id: 4, customer: 'Guy Hawkins', orderId: '12345655', value: 'Rs.200', qty: 20, reason: 'Suspicious payment method', date: 'DD-MM-YYYY' },
  { id: 5, customer: 'Esther Howard', orderId: '12345655', value: 'Rs.200', qty: 20, reason: 'Bulk purchase', date: 'DD-MM-YYYY' },
  { id: 6, customer: 'Marvin McKinney', orderId: '12345655', value: 'Rs.200', qty: 20, reason: 'Suspicious payment method', date: 'DD-MM-YYYY' },
  { id: 7, customer: 'Robert Fox', orderId: '12345655', value: 'Rs.200', qty: 20, reason: 'Bulk purchase', date: 'DD-MM-YYYY' },
];

const UnusualOrderActivityTable = () => {
  return (
    <Box>
      <TableContainer component={Paper} sx={{ borderRadius: '0.75rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>Order Value</TableCell>
              <TableCell>Order Quantity</TableCell>
              <TableCell>Reason for Alert</TableCell>
              <TableCell>Order Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id}>
                <TableCell>{r.customer}</TableCell>
                <TableCell>{r.orderId}</TableCell>
                <TableCell>{r.value}</TableCell>
                <TableCell>{r.qty}</TableCell>
                <TableCell>{r.reason}</TableCell>
                <TableCell>{r.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Pagination count={5} page={3} color="secondary" sx={{ '& .Mui-selected': { bgcolor: '#F8069D', color: '#fff' } }} />
      </Box>
    </Box>
  );
};

export default UnusualOrderActivityTable;








