import { Box, Typography, Button } from '@mui/material';
import { Icon } from '@iconify/react';

const UserManagementHeading = () => {
  const handleCreate = () => {
    console.log('Create clicked');
    // Implement create logic
  };

  const handleFilter = () => {
    console.log('Filter clicked');
    // Implement filter logic
  };

  const handleImport = () => {
    console.log('Import clicked');
    // Implement import logic
  };

  const handleExport = () => {
    console.log('Export clicked');
    // Implement export logic
  };

  return (
    <Box sx={{ mb: '2rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '1rem' }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: '#1A1A1A',
              fontWeight: 700,
              mb: '0.5rem',
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            User Management
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#5A6678',
              fontSize: '0.875rem',
            }}
          >
            View and manage all registered users.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            onClick={handleCreate}
            sx={{
              bgcolor: '#F8069D',
              color: '#fff',
              textTransform: 'none',
              px: '1.5rem',
              py: '0.625rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#C1057D',
              },
            }}
          >
            <Icon icon="mdi:plus" width="18" height="18" style={{ marginRight: '0.5rem' }} />
            Create
          </Button>

          <Button
            variant="contained"
            onClick={handleFilter}
            sx={{
              bgcolor: '#F8069D',
              color: '#fff',
              textTransform: 'none',
              px: '1.5rem',
              py: '0.625rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#C1057D',
              },
            }}
          >
            <Icon icon="mdi:filter" width="18" height="18" style={{ marginRight: '0.5rem' }} />
            Filter
          </Button>

          <Button
            variant="contained"
            onClick={handleImport}
            sx={{
              bgcolor: '#F8069D',
              color: '#fff',
              textTransform: 'none',
              px: '1.5rem',
              py: '0.625rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#C1057D',
              },
            }}
          >
            <Icon icon="mdi:plus" width="18" height="18" style={{ marginRight: '0.5rem' }} />
            Import
          </Button>

          <Button
            variant="contained"
            onClick={handleExport}
            sx={{
              bgcolor: '#F8069D',
              color: '#fff',
              textTransform: 'none',
              px: '1.5rem',
              py: '0.625rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#C1057D',
              },
            }}
          >
            <Icon icon="mdi:download" width="18" height="18" style={{ marginRight: '0.5rem' }} />
            Export
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserManagementHeading;


