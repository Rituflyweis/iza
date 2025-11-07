import { Tabs, Tab } from '@mui/material';

const CategoryTabs = ({ value, onChange, tabs }) => {
  return (
    <Tabs
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      sx={{
        minHeight: 48,
        '& .MuiTabs-flexContainer': {
          gap: 0,
        },
        '& .MuiTabs-indicator': {
          display: 'block',
        },
      }}
    >
      {tabs.map((label) => (
        <Tab
          key={label}
          label={label}
          disableRipple
          sx={{
            textTransform: 'none',
            minHeight: 48,
            marginRight: 0,
            paddingX: 2,
            paddingY: 1,
            borderRadius: 0,
            border: 'none !important',
            backgroundColor: 'transparent',
            color: 'inherit',
            fontWeight: 'inherit',
            '&.Mui-selected': {
              color: 'inherit',
              backgroundColor: 'transparent',
              border: 'none !important',
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default CategoryTabs;

