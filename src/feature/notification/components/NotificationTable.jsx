import { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const NotificationTable = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const rows = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    title: 'Lorem ipsum dolor sit',
    message: 'Conrem ipsum dolor sit amet',
    type: ['Push Notification', 'Email', 'SMS'][i % 3],
    date: 'DD-MM-YYYY',
    status: 'Sent',
  }));

  return (
    <Box>
      <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: '0.5rem', overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#F5F5F5' }}>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>S. No.</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Title</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Message</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={row.id} sx={{ bgcolor: idx % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                <TableCell>{row.id}</TableCell>
                <TableCell sx={{ color: '#1A1A1A', fontWeight: 500 }}>{row.title}</TableCell>
                <TableCell sx={{ color: '#1A1A1A' }}>{row.message}</TableCell>
                <TableCell sx={{ color: '#1A1A1A' }}>{row.type}</TableCell>
                <TableCell sx={{ color: '#1A1A1A' }}>{row.date}</TableCell>
                <TableCell sx={{ color: '#1A1A1A' }}>{row.status}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: '0.25rem' }}>
                    <IconButton size="small" onClick={() => navigate(`/notification/edit/${row.id}`)} sx={{ color: '#5A6678', '&:hover': { bgcolor: 'rgba(248,6,157,0.1)', color: '#F8069D' } }}>
                      <Icon icon="mdi:pencil" width={18} height={18} />
                    </IconButton>
                    <IconButton size="small" onClick={() => console.log('Delete', row.id)} sx={{ color: '#5A6678', '&:hover': { bgcolor: 'rgba(248,6,157,0.1)', color: '#F8069D' } }}>
                      <Icon icon="mdi:delete" width={18} height={18} />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '1.5rem' }}>
        <Typography sx={{ color: '#5A6678', fontSize: '0.875rem' }}>Page {page}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IconButton onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} sx={{ color: '#5A6678' }}>
            <Icon icon="mdi:chevron-left" width={20} height={20} />
          </IconButton>
          {[1, 2, 3, 4, 5].map((p) => (
            <Box key={p} onClick={() => setPage(p)} sx={{ minWidth: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '0.875rem', fontWeight: page === p ? 600 : 400, bgcolor: page === p ? '#F8069D' : '#F5F5F5', color: page === p ? '#fff' : '#5A6678', cursor: 'pointer' }}>{p}</Box>
          ))}
          <IconButton onClick={() => setPage(Math.min(5, page + 1))} disabled={page === 5} sx={{ color: '#5A6678' }}>
            <Icon icon="mdi:chevron-right" width={20} height={20} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationTable;


