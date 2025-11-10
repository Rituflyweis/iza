import { Box, Typography, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const InventoryManagementHeading = () => {
  const navigate = useNavigate();
  const handleFilter = () => console.log('Filter');
  const handleAdd = () => navigate('/inventory/add');

  return (
    <Box sx={{ mb: '2rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '1rem' }}>
        <Box>
          <Typography variant="h4" sx={{ color: '#1A1A1A', fontWeight: 700, mb: '0.5rem', fontSize: { xs: '1.5rem', md: '2rem' } }}>
            Inventory Management
          </Typography>
          <Typography variant="body1" sx={{ color: '#5A6678', fontSize: '0.875rem' }}>
            Overview of current stock levels across all products and variants.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Button variant="contained" onClick={handleFilter} sx={{ bgcolor: '#F8069D', color: '#fff', textTransform: 'none', px: '1.25rem', py: '0.6rem', borderRadius: '0.5rem' }}>
            <Icon icon="mdi:filter" width={18} height={18} style={{ marginRight: 8 }} />
            Filter
          </Button>
          <Button variant="contained" onClick={handleAdd} sx={{ bgcolor: '#F8069D', color: '#fff', textTransform: 'none', px: '1.25rem', py: '0.6rem', borderRadius: '0.5rem' }}>
            <Icon icon="mdi:plus" width={18} height={18} style={{ marginRight: 8 }} />
            Add
          </Button>
          <Button variant="contained" sx={{ bgcolor: '#F8069D', color: '#fff', textTransform: 'none', px: '1.25rem', py: '0.6rem', borderRadius: '0.5rem' }}>
            <Icon icon="mdi:download" width={18} height={18} style={{ marginRight: 8 }} />
            Export
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InventoryManagementHeading;









