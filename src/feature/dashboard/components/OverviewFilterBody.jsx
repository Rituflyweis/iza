import { Box } from '@mui/material';
import { Icon } from '@iconify/react';

const Section = ({ title, children }) => (
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

const MonthToggle = ({ label, checked, onChange }) => (
  <Box
    onClick={onChange}
    sx={{
      border: checked ? '1px solid #F8069D' : '1px solid #d0d0d0',
      borderRadius: '0.5rem',
      textAlign: 'center',
      py: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: checked ? '#F8069D' : '#1A1A1A',
      cursor: 'pointer',
      transition: 'all 0.2s',
      bgColor: '#fff',
    }}
  >
    {label}
  </Box>
);

const InputField = ({ label, placeholder, value, onChange, type = 'text' }) => (
  <Box>
    {label && (
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
        {label}
      </Box>
    )}
    <Box
      component="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
);

const OverviewFilterBody = ({ filterData, onFilterChange }) => {
  const months = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];

  const toggleMonth = (month) => {
    const updated = filterData.months.includes(month)
      ? filterData.months.filter((m) => m !== month)
      : [...filterData.months, month];
    onFilterChange({ ...filterData, months: updated });
  };

  return (
    <Box>
      <Section title="Month">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.75rem',
          }}
        >
          {months.map((month) => (
            <MonthToggle
              key={month}
              label={month}
              checked={filterData.months.includes(month)}
              onChange={() => toggleMonth(month)}
            />
          ))}
        </Box>
      </Section>

      <Section title="Year">
        <Box sx={{ position: 'relative' }}>
          <InputField
            label=""
            placeholder="Enter year"
            value={filterData.year}
            onChange={(e) => onFilterChange({ ...filterData, year: e.target.value })}
          />
          <Icon
            icon="mdi:calendar"
            width={20}
            height={20}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#1A1A1A',
              pointerEvents: 'none',
            }}
          />
        </Box>
      </Section>

      <Section title="Custom">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }}
        >
          <InputField
            label="Start Date"
            placeholder="Start Date"
            type="date"
            value={filterData.startDate}
            onChange={(e) => onFilterChange({ ...filterData, startDate: e.target.value })}
          />
          <InputField
            label="End Date"
            placeholder="End Date"
            type="date"
            value={filterData.endDate}
            onChange={(e) => onFilterChange({ ...filterData, endDate: e.target.value })}
          />
        </Box>
      </Section>
    </Box>
  );
};

export default OverviewFilterBody;




