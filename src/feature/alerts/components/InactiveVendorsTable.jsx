import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination } from '@mui/material';

const rows = [
  { id: 1, vendor: 'Vendor A', lastActive: 'DD-MM-YYYY', days: 30 },
  { id: 2, vendor: 'Vendor B', lastActive: 'DD-MM-YYYY', days: 45 },
  { id: 3, vendor: 'Vendor C', lastActive: 'DD-MM-YYYY', days: 60 },
  { id: 4, vendor: 'Vendor D', lastActive: 'DD-MM-YYYY', days: 15 },
];

const InactiveVendorsTable = () => {
  return (
    <Box>
      <TableContainer component={Paper} sx={{ borderRadius: '0.75rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vendor</TableCell>
              <TableCell>Last Active</TableCell>
              <TableCell>Inactive Days</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id}>
                <TableCell>{r.vendor}</TableCell>
                <TableCell>{r.lastActive}</TableCell>
                <TableCell>{r.days}</TableCell>
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

export default InactiveVendorsTable;













