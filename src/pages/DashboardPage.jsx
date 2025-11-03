import { Typography, Box } from '@mui/material';
import Layout from '../feature/layout';

const DashboardPage = () => {
  return (
    <Layout>
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
          Dashboard
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#5A6678',
            mb: '2rem',
            fontSize: '0.875rem',
          }}
        >
          Track your sales and performance of your strategy
        </Typography>

        {/* Your dashboard content goes here */}
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: '0.5rem',
            p: '2rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          <Typography>Dashboard content will go here...</Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default DashboardPage;

