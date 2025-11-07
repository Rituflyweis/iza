import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Pagination } from '@mui/material';
import { Icon } from '@iconify/react';

const rows = [
  { id: 1, name: 'Wade Warren', userId: '123245656', totalOrders: 20, returnRate: '20%', units: 10 },
  { id: 2, name: 'Jacob Jones', userId: '122345656', totalOrders: 10, returnRate: '15%', units: 50 },
  { id: 3, name: 'Arlene McCoy', userId: '122345656', totalOrders: 20, returnRate: '20%', units: 10 },
  { id: 4, name: 'Guy Hawkins', userId: '122345656', totalOrders: 10, returnRate: '15%', units: 50 },
  { id: 5, name: 'Esther Howard', userId: '122345656', totalOrders: 20, returnRate: '20%', units: 10 },
  { id: 6, name: 'Marvin McKinney', userId: '122345656', totalOrders: 20, returnRate: '20%', units: 10 },
  { id: 7, name: 'Robert Fox', userId: '122345655', totalOrders: 20, returnRate: '20%', units: 10 },
];

const HighReturnRateTable = () => {
  return (
    <Box>
      <TableContainer component={Paper} sx={{ borderRadius: '0.75rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Total Orders</TableCell>
              <TableCell>Return Rate</TableCell>
              <TableCell>Units Returned</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id}>
                <TableCell>{r.name}</TableCell>
                <TableCell>{r.userId}</TableCell>
                <TableCell>{r.totalOrders}</TableCell>
                <TableCell>{r.returnRate}</TableCell>
                <TableCell>{r.units}</TableCell>
                <TableCell>
                  <IconButton>
                    <Icon icon="mdi:dots-vertical" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Pagination count={5} page={2} color="secondary" sx={{ '& .Mui-selected': { bgcolor: '#F8069D', color: '#fff' } }} />
      </Box>
    </Box>
  );
};

export default HighReturnRateTable;







