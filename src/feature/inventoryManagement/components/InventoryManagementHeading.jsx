import { Box, Typography, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterOffcanvas } from '../../../components';
import InventoryFilterBody from './InventoryFilterBody';

const InventoryManagementHeading = () => {
  const navigate = useNavigate();
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    status: [],
    months: [],
    sku: '',
    startDate: '',
    endDate: '',
    order: '',
  });

  const handleFilter = () => {
    setFilterOpen(true);
  };

  const handleAdd = () => navigate('/inventory/add');

  const handleFilterChange = (newFilterData) => {
    setFilterData(newFilterData);
  };

  const handleResetFilters = () => {
    setFilterData({
      status: [],
      months: [],
      sku: '',
      startDate: '',
      endDate: '',
      order: '',
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

      {/* Filter Offcanvas */}
      <FilterOffcanvas
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onReset={handleResetFilters}
        onApply={handleApplyFilters}
        title="Filter"
      >
        <InventoryFilterBody
          filterData={filterData}
          onFilterChange={handleFilterChange}
        />
      </FilterOffcanvas>
    </Box>
  );
};

export default InventoryManagementHeading;












