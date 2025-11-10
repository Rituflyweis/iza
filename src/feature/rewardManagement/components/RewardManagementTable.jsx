import { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Chip } from '@mui/material';
import { Icon } from '@iconify/react';

const RewardManagementTable = () => {
  const [page, setPage] = useState(1);

  const rows = [
    { id: 1, ruleName: 'First Purchase Bonus', ruleType: 'Earning', points: '6/10', tier: 'Gold', appliesTo: 'All Customers', expiry: '2024-12-31', status: 'New' },
    { id: 2, ruleName: 'Referral Program', ruleType: 'Earning', points: '6/10', tier: 'Silver', appliesTo: 'Specific Group', expiry: '2024-12-31', status: 'Reviewed' },
    { id: 3, ruleName: 'Birthday Reward', ruleType: 'Earning', points: '8/10', tier: 'Platinum', appliesTo: 'All Customers', expiry: '2024-12-31', status: 'Rejected' },
    { id: 4, ruleName: 'Loyalty Tier Bonus', ruleType: 'Earning', points: '9/10', tier: 'Platinum', appliesTo: 'Loyalty Tier A', expiry: '2024-12-31', status: 'Reviewed' },
  ];

  const statusColor = (status) => {
    switch (status) {
      case 'New':
        return { color: '#F8069D', dot: '#F8069D' };
      case 'Reviewed':
        return { color: '#4CAF50', dot: '#4CAF50' };
      case 'Rejected':
        return { color: '#F44336', dot: '#F44336' };
      default:
        return { color: '#5A6678', dot: '#9E9E9E' };
    }
  };

  const StatusCell = ({ value }) => {
    const c = statusColor(value);
    return (
      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: c.color, fontSize: '0.875rem' }}>
        <Box sx={{ width: 8, height: 8, bgcolor: c.dot, borderRadius: '50%' }} />
        {value}
      </Box>
    );
  };

  return (
    <Box>
      <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: '0.5rem', overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#F5F5F5' }}>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>S.L.NO</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Rule Name</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Rule Type</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Points</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Tier</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Applies To</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Expiry Date</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={row.id} sx={{ bgcolor: idx % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                <TableCell>{row.id}</TableCell>
                <TableCell sx={{ color: '#1A1A1A', fontWeight: 500 }}>{row.ruleName}</TableCell>
                <TableCell sx={{ color: '#1A1A1A' }}>{row.ruleType}</TableCell>
                <TableCell sx={{ color: '#1A1A1A' }}>{row.points}</TableCell>
                <TableCell sx={{ color: '#1A1A1A' }}>{row.tier}</TableCell>
                <TableCell sx={{ color: '#1A1A1A' }}>{row.appliesTo}</TableCell>
                <TableCell sx={{ color: '#1A1A1A' }}>{row.expiry}</TableCell>
                <TableCell><StatusCell value={row.status} /></TableCell>
                <TableCell>
                  <IconButton size="small" sx={{ color: '#5A6678', '&:hover': { bgcolor: 'rgba(248,6,157,0.1)', color: '#F8069D' } }}>
                    <Icon icon="mdi:eye" width={18} height={18} />
                  </IconButton>
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

export default RewardManagementTable;









