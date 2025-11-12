import { Box, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterOffcanvas } from '../../../components';
import NotificationFilterBody from './NotificationFilterBody';

const NotificationHeading = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    notification: [],
    status: [],
    months: [],
    year: '',
  });
  const open = Boolean(anchorEl);

  const handleFilter = () => {
    setFilterOpen(true);
  };

  const handleAdd = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSelect = (path) => { handleClose(); navigate(path); };

  const handleFilterChange = (newFilterData) => {
    setFilterData(newFilterData);
  };

  const handleResetFilters = () => {
    setFilterData({
      notification: [],
      status: [],
      months: [],
      year: '',
    });
  };

  const handleApplyFilters = () => {
    console.log('Applied filters:', filterData);
    // Implement filter logic here
    // You can pass filterData to your table component or API call
  };

  return (
    <Box sx={{ mb: '2rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '1rem' }}>
        <Box>
          <Typography variant="h4" sx={{ color: '#1A1A1A', fontWeight: 700, mb: '0.5rem', fontSize: { xs: '1.5rem', md: '2rem' } }}>
            Notification
          </Typography>
          <Typography variant="body2" sx={{ color: '#5A6678' }}>Notification and alerts</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '0.75rem' }}>
          <Button variant="contained" onClick={handleFilter} sx={{ bgcolor: '#F8069D', color: '#fff', textTransform: 'none' }}>
            <Icon icon="mdi:filter" width={18} height={18} style={{ marginRight: 8 }} />
            Filter
          </Button>
          <Button variant="contained" onClick={handleAdd} sx={{ bgcolor: '#F8069D', color: '#fff', textTransform: 'none' }}>
            <Icon icon="mdi:plus" width={18} height={18} style={{ marginRight: 8 }} />
            Add New
          </Button>
        </Box>
      </Box>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} PaperProps={{ sx:{ borderRadius: '0.5rem' } }}>
        <MenuItem onClick={() => handleSelect('/notification/new/email')}>Email</MenuItem>
        <MenuItem onClick={() => handleSelect('/notification/new/push')}>Push Notification</MenuItem>
        <MenuItem onClick={() => handleSelect('/notification/new/sms')}>SMS</MenuItem>
        <MenuItem onClick={() => handleSelect('/notification/new/whatsapp')}>Whatsapp</MenuItem>
      </Menu>

      {/* Filter Offcanvas */}
      <FilterOffcanvas
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onReset={handleResetFilters}
        onApply={handleApplyFilters}
        title="Filter"
      >
        <NotificationFilterBody
          filterData={filterData}
          onFilterChange={handleFilterChange}
        />
      </FilterOffcanvas>
    </Box>
  );
};

export default NotificationHeading;


