import { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { red } from '@mui/material/colors';

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#F5F5F5' }}>
      {/* Sidebar */}
      <Sidebar mobileOpen={mobileOpen} onMobileClose={handleDrawerToggle} />

      {/* Main Content Area */}
      <Box 
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: '100%', md: `calc(100% - 280px)` },
          ml: { xs: 0, md: '280px' },
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          backgroundColor:'red'
        }}
      >
        {/* Header */}
        <Header onMenuClick={handleDrawerToggle} />

        {/* Page Content */}
        <Box
          sx={{
            flexGrow: 1,
            p: { xs: '1rem', md: '2rem' },
            bgcolor: '#F5F5F5',
            overflow: 'auto',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;



