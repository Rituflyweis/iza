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

const InventoryFilterBody = ({ filterData, onFilterChange }) => {
  const months = [
    'Jan', 'Feb', 'March', 'April', 'May',
    'June', 'July', 'August', 'Sep', 'Oct',
    'Nov', 'Dec'
  ];

  const handleStatusChange = (status) => {
    const newStatus = filterData.status.includes(status)
      ? filterData.status.filter(s => s !== status)
      : [...filterData.status, status];
    onFilterChange({ ...filterData, status: newStatus });
  };

  const handleMonthChange = (month) => {
    const newMonths = filterData.months.includes(month)
      ? filterData.months.filter(m => m !== month)
      : [...filterData.months, month];
    onFilterChange({ ...filterData, months: newMonths });
  };

  const handleOrderChange = (order) => {
    const newOrder = filterData.order === order ? '' : order;
    onFilterChange({ ...filterData, order: newOrder });
  };

  return (
    <Box>
      {/* Status Section */}
      <FilterSection title="Status">
        <CheckboxOption
          label="Low stock"
          checked={filterData.status.includes('Low stock')}
          onChange={() => handleStatusChange('Low stock')}
        />
        <CheckboxOption
          label="In stock"
          checked={filterData.status.includes('In stock')}
          onChange={() => handleStatusChange('In stock')}
        />
      </FilterSection>

      {/* Month Section */}
      <FilterSection title="Month">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.75rem',
          }}
        >
          {months.map((month) => (
            <CheckboxOption
              key={month}
              label={month}
              checked={filterData.months.includes(month)}
              onChange={() => handleMonthChange(month)}
            />
          ))}
        </Box>
      </FilterSection>

      {/* SKU Section */}
      <FilterSection title="SKU">
        <Box
          component="input"
          type="text"
          placeholder="Enter SKU"
          value={filterData.sku || ''}
          onChange={(e) => onFilterChange({ ...filterData, sku: e.target.value })}
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

      {/* Custom Date Range Section */}
      <FilterSection title="Custom">
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
              type="text"
              placeholder="Start Date"
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
              type="text"
              placeholder="End Date"
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
    </Box>
  );
};

export default InventoryFilterBody;

