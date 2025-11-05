import { Box, Typography, Button } from '@mui/material';
import { Icon } from '@iconify/react';

const RewardManagementHeading = () => {
  const handleCreate = () => {
    console.log('Create New Rule');
  };

  return (
    <Box sx={{ mb: '2rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '1rem' }}>
        <Box>
          <Typography variant="h4" sx={{ color: '#1A1A1A', fontWeight: 700, mb: '0.5rem', fontSize: { xs: '1.5rem', md: '2rem' } }}>
            Reward Management
          </Typography>
          <Typography variant="body1" sx={{ color: '#5A6678', fontSize: '0.875rem' }}>
            Manage all loyalty points, cashback rules, customer points, and program reports.
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={handleCreate}
          sx={{ bgcolor: '#F8069D', color: '#fff', textTransform: 'none', px: '1.5rem', py: '0.625rem', borderRadius: '0.5rem', fontWeight: 600 }}
        >
          <Icon icon="mdi:plus" width={18} height={18} style={{ marginRight: 8 }} />
          Create New Rule
        </Button>
      </Box>
    </Box>
  );
};

export default RewardManagementHeading;



