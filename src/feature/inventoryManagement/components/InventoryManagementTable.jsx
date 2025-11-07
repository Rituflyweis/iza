import { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Checkbox, Chip } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const InventoryManagementTable = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const rows = [
    { id: 1, product: 'Hydrating Serum', variant: '30ml', sku: 'HS30', skinType: 'All', currentStock: 160, expiry: '06/2024', status: 'Low stock' },
    { id: 2, product: 'Soothing Cleanser', variant: '200ml', sku: 'SC200', skinType: 'Sensitive', currentStock: 80, expiry: '2026-12-31', status: 'In Stock' },
    { id: 3, product: 'Brightening Mask', variant: '50g', sku: 'BM50', skinType: 'Dull', currentStock: 50, expiry: '2025-12-12', status: 'In Stock' },
  ];

  const statusColor = (status) => {
    if (status === 'In Stock') return { bg: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50' };
    if (status === 'Low stock') return { bg: 'rgba(244, 67, 54, 0.1)', color: '#F44336' };
    return { bg: 'rgba(158, 158, 158, 0.1)', color: '#9E9E9E' };
  };

  return (
    <Box>
      <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: '0.5rem', overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#F5F5F5' }}>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>S.L.NO</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Product Name</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Variant/Size</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>SKU</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Skin Type</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Current Stock</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Expiry/PAO*</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => {
              const c = statusColor(row.status);
              return (
                <TableRow key={row.id} sx={{ bgcolor: idx % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                  <TableCell><Checkbox size="small" /></TableCell>
                  <TableCell sx={{ color: '#1A1A1A' }}>{row.product}</TableCell>
                  <TableCell sx={{ color: '#1A1A1A' }}>{row.variant}</TableCell>
                  <TableCell sx={{ color: '#1A1A1A' }}>{row.sku}</TableCell>
                  <TableCell sx={{ color: '#1A1A1A' }}>{row.skinType}</TableCell>
                  <TableCell sx={{ color: '#1A1A1A' }}>{row.currentStock}</TableCell>
                  <TableCell sx={{ color: '#1A1A1A' }}>{row.expiry}</TableCell>
                  <TableCell>
                    <Chip label={row.status} size="small" sx={{ bgcolor: c.bg, color: c.color, fontWeight: 500, fontSize: '0.75rem', borderRadius: '1rem' }} />
                  </TableCell>
                  <TableCell>
                    <IconButton size="small" onClick={() => navigate(`/inventory/detail/${row.id}`)} sx={{ color: '#5A6678', '&:hover': { bgcolor: 'rgba(248,6,157,0.1)', color: '#F8069D' } }}>
                      <Icon icon="mdi:eye" width={18} height={18} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
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

export default InventoryManagementTable;








