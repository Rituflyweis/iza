import { Box, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const TransactionManagementHeading = () => {
  const [exportAnchor, setExportAnchor] = useState(null);
  const [importAnchor, setImportAnchor] = useState(null);

  const handleFilter = () => {
    console.log('Filter clicked');
    // Implement filter logic
  };

  const handleExportClick = (event) => {
    setExportAnchor(event.currentTarget);
  };

  const handleExportClose = () => {
    setExportAnchor(null);
  };

  const handleExportSelect = (format) => {
    console.log(`Export as ${format}`);
    handleExportClose();
    // Implement export logic
  };

  const handleImportClick = (event) => {
    setImportAnchor(event.currentTarget);
  };

  const handleImportClose = () => {
    setImportAnchor(null);
  };

  const handleImportSelect = (format) => {
    console.log(`Import as ${format}`);
    handleImportClose();
    // Implement import logic
  };

  const exportOptions = ['CSV', 'PDF', 'Doc', 'Excel'];
  const importOptions = ['CSV', 'PDF', 'Doc', 'Excel'];

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
            Transaction Management
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#5A6678',
              fontSize: '0.875rem',
            }}
          >
            View and manage all transactions.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
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
            onClick={handleImportClick}
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
            onClick={handleExportClick}
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

      {/* Export Menu */}
      <Menu
        anchorEl={exportAnchor}
        open={Boolean(exportAnchor)}
        onClose={handleExportClose}
        PaperProps={{
          sx: {
            mt: '0.5rem',
            minWidth: 200,
            borderRadius: '0.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {exportOptions.map((option) => (
          <MenuItem
            key={option}
            onClick={() => handleExportSelect(option)}
            sx={{
              fontSize: '0.875rem',
              py: '0.75rem',
              px: '1rem',
              '&:hover': {
                bgcolor: 'rgba(248, 6, 157, 0.1)',
              },
            }}
          >
            Export as a {option}
          </MenuItem>
        ))}
      </Menu>

      {/* Import Menu */}
      <Menu
        anchorEl={importAnchor}
        open={Boolean(importAnchor)}
        onClose={handleImportClose}
        PaperProps={{
          sx: {
            mt: '0.5rem',
            minWidth: 200,
            borderRadius: '0.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {importOptions.map((option) => (
          <MenuItem
            key={option}
            onClick={() => handleImportSelect(option)}
            sx={{
              fontSize: '0.875rem',
              py: '0.75rem',
              px: '1rem',
              '&:hover': {
                bgcolor: 'rgba(248, 6, 157, 0.1)',
              },
            }}
          >
            Import as a {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default TransactionManagementHeading;


