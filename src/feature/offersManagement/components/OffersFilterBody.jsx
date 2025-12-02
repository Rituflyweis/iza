import { Box } from '@mui/material';
import { Icon } from '@iconify/react';

const FilterSection = ({ title, children }) => (
  <Box sx={{ mb: '2rem' }}>
    <Box
      component="h3"
      sx={{
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#1A1A1A',
        mb: '1rem',
      }}
    >
      {title}
    </Box>
    {children}
  </Box>
);

const CheckboxOption = ({ label, checked, onChange }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      mb: '0.75rem',
      cursor: 'pointer',
    }}
    onClick={onChange}
  >
    <Box
      sx={{
        width: '20px',
        height: '20px',
        border: '2px solid #d0d0d0',
        borderRadius: '4px',
        mr: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: checked ? '#F8069D' : '#fff',
        borderColor: checked ? '#F8069D' : '#d0d0d0',
        transition: 'all 0.2s',
      }}
    >
      {checked && (
        <Icon icon="mdi:check" width={14} height={14} style={{ color: '#fff' }} />
      )}
    </Box>
    <Box
      component="span"
      sx={{
        fontSize: '0.875rem',
        color: '#1A1A1A',
      }}
    >
      {label}
    </Box>
  </Box>
);

const OffersFilterBody = ({ filterData, onFilterChange }) => {
  const handleTypeChange = (type) => {
    const newTypes = filterData.types.includes(type)
      ? filterData.types.filter(t => t !== type)
      : [...filterData.types, type];
    onFilterChange({ ...filterData, types: newTypes });
  };

  const handleStatusChange = (status) => {
    const newStatus = filterData.status.includes(status)
      ? filterData.status.filter(s => s !== status)
      : [...filterData.status, status];
    onFilterChange({ ...filterData, status: newStatus });
  };

  const handleDiscountTypeChange = (discountType) => {
    const newDiscountTypes = filterData.discountTypes.includes(discountType)
      ? filterData.discountTypes.filter(d => d !== discountType)
      : [...filterData.discountTypes, discountType];
    onFilterChange({ ...filterData, discountTypes: newDiscountTypes });
  };

  return (
    <Box>
      {/* Type Section */}
      <FilterSection title="Type">
        <CheckboxOption
          label="Product"
          checked={filterData.types.includes('Product')}
          onChange={() => handleTypeChange('Product')}
        />
        <CheckboxOption
          label="Category"
          checked={filterData.types.includes('Category')}
          onChange={() => handleTypeChange('Category')}
        />
      </FilterSection>

      {/* Status Section */}
      <FilterSection title="Status">
        <CheckboxOption
          label="In Stock"
          checked={filterData.status.includes('In Stock')}
          onChange={() => handleStatusChange('In Stock')}
        />
        <CheckboxOption
          label="Low stock"
          checked={filterData.status.includes('Low stock')}
          onChange={() => handleStatusChange('Low stock')}
        />
      </FilterSection>

      {/* Discount Type Section */}
      <FilterSection title="Discount Type">
        <CheckboxOption
          label="Percentage"
          checked={filterData.discountTypes.includes('Percentage')}
          onChange={() => handleDiscountTypeChange('Percentage')}
        />
        <CheckboxOption
          label="Flat"
          checked={filterData.discountTypes.includes('Flat')}
          onChange={() => handleDiscountTypeChange('Flat')}
        />
      </FilterSection>

      {/* Offer Code Section */}
      <FilterSection title="Offer Code">
        <Box
          component="input"
          type="text"
          placeholder="Enter Offer Code"
          value={filterData.offerCode || ''}
          onChange={(e) => onFilterChange({ ...filterData, offerCode: e.target.value })}
          sx={{
            width: '100%',
            py: '0.75rem',
            px: '1rem',
            border: '1px solid #d0d0d0',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
            outline: 'none',
            '&:focus': {
              borderColor: '#F8069D',
              boxShadow: '0 0 0 2px rgba(248, 6, 157, 0.2)',
            },
          }}
        />
      </FilterSection>

      {/* Date Range Section */}
      <FilterSection title="Date Range">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }}
        >
          <Box>
            <Box
              component="label"
              sx={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#1A1A1A',
                mb: '0.5rem',
              }}
            >
              Start Date
            </Box>
            <Box
              component="input"
              type="date"
              value={filterData.startDate || ''}
              onChange={(e) => onFilterChange({ ...filterData, startDate: e.target.value })}
              sx={{
                width: '100%',
                py: '0.75rem',
                px: '1rem',
                border: '1px solid #d0d0d0',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                outline: 'none',
                '&:focus': {
                  borderColor: '#F8069D',
                  boxShadow: '0 0 0 2px rgba(248, 6, 157, 0.2)',
                },
              }}
            />
          </Box>
          <Box>
            <Box
              component="label"
              sx={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#1A1A1A',
                mb: '0.5rem',
              }}
            >
              End Date
            </Box>
            <Box
              component="input"
              type="date"
              value={filterData.endDate || ''}
              onChange={(e) => onFilterChange({ ...filterData, endDate: e.target.value })}
              sx={{
                width: '100%',
                py: '0.75rem',
                px: '1rem',
                border: '1px solid #d0d0d0',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                outline: 'none',
                '&:focus': {
                  borderColor: '#F8069D',
                  boxShadow: '0 0 0 2px rgba(248, 6, 157, 0.2)',
                },
              }}
            />
          </Box>
        </Box>
      </FilterSection>
    </Box>
  );
};

export default OffersFilterBody;






