import { Box, Typography, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterOffcanvas } from '../../../components';
import VideoFilterBody from './VideoFilterBody';

const VideoManagementHeading = () => {
  const navigate = useNavigate();
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    type: [],
    status: [],
    months: [],
    uploadedOn: '',
  });

  const handleFilter = () => {
    setFilterOpen(true);
  };

  const handleAddNew = () => {
    navigate('/video-management/add-video');
  };

  const handleFilterChange = (newFilterData) => {
    setFilterData(newFilterData);
  };

  const handleResetFilters = () => {
    setFilterData({
      type: [],
      status: [],
      months: [],
      uploadedOn: '',
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
          <Typography
            variant="h4"
            sx={{
              color: '#1A1A1A',
              fontWeight: 700,
              mb: '0.5rem',
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            Video Management
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#5A6678',
              fontSize: '0.875rem',
              maxWidth: '600px',
            }}
          >
            Upload and manage both Product and IZA Stream videos here. Edit, pause, or delete videos easily and control their visibility in one place.
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
            onClick={handleAddNew}
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
            Add New
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
        <VideoFilterBody
          filterData={filterData}
          onFilterChange={handleFilterChange}
        />
      </FilterOffcanvas>
    </Box>
  );
};

export default VideoManagementHeading;

