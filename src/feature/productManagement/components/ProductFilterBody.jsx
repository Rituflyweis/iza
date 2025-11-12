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

const ProductFilterBody = ({ filterData, onFilterChange }) => {
  const handleOrderChange = (order) => {
    const newOrder = filterData.order === order ? '' : order;
    onFilterChange({ ...filterData, order: newOrder });
  };

  const handleGenderChange = (gender) => {
    const newGender = filterData.gender.includes(gender)
      ? filterData.gender.filter(g => g !== gender)
      : [...filterData.gender, gender];
    onFilterChange({ ...filterData, gender: newGender });
  };

  return (
    <Box>
      {/* Brand Section */}
      <FilterSection title="Brand">
        <Box
          component="input"
          type="text"
          placeholder="Enter Brand"
          value={filterData.brand || ''}
          onChange={(e) => onFilterChange({ ...filterData, brand: e.target.value })}
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

      {/* Category Section */}
      <FilterSection title="Category">
        <Box
          component="input"
          type="text"
          placeholder="Enter Category"
          value={filterData.category || ''}
          onChange={(e) => onFilterChange({ ...filterData, category: e.target.value })}
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

      {/* Ingredients Section */}
      <FilterSection title="Ingredients">
        <Box
          component="input"
          type="text"
          placeholder="Enter Ingredients"
          value={filterData.ingredients || ''}
          onChange={(e) => onFilterChange({ ...filterData, ingredients: e.target.value })}
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

      {/* Order Section */}
      <FilterSection title="Order">
        <CheckboxOption
          label="Ascending Order"
          checked={filterData.order === 'ascending'}
          onChange={() => handleOrderChange('ascending')}
        />
        <CheckboxOption
          label="Descending Order"
          checked={filterData.order === 'descending'}
          onChange={() => handleOrderChange('descending')}
        />
      </FilterSection>

      {/* Gender Section */}
      <FilterSection title="Gender">
        <CheckboxOption
          label="Male"
          checked={filterData.gender.includes('Male')}
          onChange={() => handleGenderChange('Male')}
        />
        <CheckboxOption
          label="Female"
          checked={filterData.gender.includes('Female')}
          onChange={() => handleGenderChange('Female')}
        />
      </FilterSection>
    </Box>
  );
};

export default ProductFilterBody;

