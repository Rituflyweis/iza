import { Box, FormGroup, FormControlLabel, Switch, Paper, Typography } from '@mui/material';

const PaymentAlertSettings = () => {
  return (
    <Paper sx={{ p: 3, borderRadius: '0.75rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600 }}>
        <FormGroup>
          <FormControlLabel control={<Switch />} label={<Typography>Failed Payments</Typography>} />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Switch />} label={<Typography>Refunds Processed</Typography>} />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Switch />} label={<Typography>Chargeback/Dispute Filed</Typography>} />
        </FormGroup>
      </Box>
    </Paper>
  );
};

export default PaymentAlertSettings;


