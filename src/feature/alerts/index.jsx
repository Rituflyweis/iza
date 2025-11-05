import { useState } from 'react';
import { Box, Tabs, Tab, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import InventoryAlertsTable from './components/InventoryAlertsTable';
import HighReturnRateTable from './components/HighReturnRateTable';
import UnusualOrderActivityTable from './components/UnusualOrderActivityTable';
import PaymentAlertSettings from './components/PaymentAlertSettings';
import InactiveVendorsTable from './components/InactiveVendorsTable';

const tabStyles = {
  textTransform: 'none',
  borderRadius: '0.5rem',
  mr: 1,
  px: 2,
  minHeight: 36,
  '&.Mui-selected': {
    bgcolor: '#000',
    color: '#fff',
  },
  bgcolor: '#fff',
  color: '#000',
  border: '1px solid #E5E7EB',
};

const Alerts = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  return (
    <Box>
      {/* Heading */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Alerts</Typography>
          <Typography variant="body2" sx={{ color: '#5A6678' }}>Lorem ipsum dolor sit</Typography>
        </Box>

        <Button
          variant="text"
          sx={{ color: '#F8069D', textTransform: 'none', fontWeight: 600 }}
          onClick={() => navigate('/alerts/settings')}
        >
          Alert Settings
        </Button>
      </Box>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        sx={{ mb: 2, '& .MuiTabs-flexContainer': { flexWrap: 'wrap', gap: 1 } }}
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        <Tab disableRipple label="Inventory Alerts" sx={tabStyles} />
        <Tab disableRipple label="High Return Rate" sx={tabStyles} />
        <Tab disableRipple label="Unusual Order activity" sx={tabStyles} />
        <Tab disableRipple label="Payment Alert" sx={tabStyles} />
        <Tab disableRipple label="Inactive Vendors" sx={tabStyles} />
      </Tabs>

      {/* Content */}
      <Box>
        {tab === 0 && <InventoryAlertsTable />}
        {tab === 1 && <HighReturnRateTable />}
        {tab === 2 && <UnusualOrderActivityTable />}
        {tab === 3 && <PaymentAlertSettings />}
        {tab === 4 && <InactiveVendorsTable />}
      </Box>
    </Box>
  );
};

export default Alerts;


