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

const NotificationFilterBody = ({ filterData, onFilterChange }) => {
  const months = [
    'Jan', 'Feb', 'March', 'April', 'May',
    'June', 'July', 'August', 'Sep', 'Oct',
    'Nov', 'Dec'
  ];

  const handleNotificationChange = (notificationType) => {
    const newNotifications = filterData.notification.includes(notificationType)
      ? filterData.notification.filter(n => n !== notificationType)
      : [...filterData.notification, notificationType];
    onFilterChange({ ...filterData, notification: newNotifications });
  };

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

  return (
    <Box>
      {/* Notification Section */}
      <FilterSection title="Notification">
        <CheckboxOption
          label="All Notification"
          checked={filterData.notification.includes('All Notification')}
          onChange={() => handleNotificationChange('All Notification')}
        />
        <CheckboxOption
          label="Push Notification"
          checked={filterData.notification.includes('Push Notification')}
          onChange={() => handleNotificationChange('Push Notification')}
        />
        <CheckboxOption
          label="Email"
          checked={filterData.notification.includes('Email')}
          onChange={() => handleNotificationChange('Email')}
        />
        <CheckboxOption
          label="SMS"
          checked={filterData.notification.includes('SMS')}
          onChange={() => handleNotificationChange('SMS')}
        />
        <CheckboxOption
          label="Whatsapp"
          checked={filterData.notification.includes('Whatsapp')}
          onChange={() => handleNotificationChange('Whatsapp')}
        />
      </FilterSection>

      {/* Status Section */}
      <FilterSection title="Status">
        <CheckboxOption
          label="Delivered"
          checked={filterData.status.includes('Delivered')}
          onChange={() => handleStatusChange('Delivered')}
        />
        <CheckboxOption
          label="Cancelled"
          checked={filterData.status.includes('Cancelled')}
          onChange={() => handleStatusChange('Cancelled')}
        />
        <CheckboxOption
          label="Shipped"
          checked={filterData.status.includes('Shipped')}
          onChange={() => handleStatusChange('Shipped')}
        />
        <CheckboxOption
          label="Dispatched"
          checked={filterData.status.includes('Dispatched')}
          onChange={() => handleStatusChange('Dispatched')}
        />
        <CheckboxOption
          label="Returned"
          checked={filterData.status.includes('Returned')}
          onChange={() => handleStatusChange('Returned')}
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

      {/* Year Section */}
      <FilterSection title="Year">
        <Box sx={{ position: 'relative' }}>
          <Box
            component="input"
            type="text"
            placeholder="Enter Year"
            value={filterData.year || ''}
            onChange={(e) => onFilterChange({ ...filterData, year: e.target.value })}
            sx={{
              width: '100%',
              py: '0.75rem',
              px: '1rem',
              pr: '3rem',
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
          <Icon
            icon="mdi:calendar"
            width={20}
            height={20}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#1A1A1A',
              pointerEvents: 'none',
            }}
          />
        </Box>
      </FilterSection>
    </Box>
  );
};

export default NotificationFilterBody;

