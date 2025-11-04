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
          backgroundColor: '#F5F5F5'
        }}
      >
        {/* Page Content */}
        <Box
          sx={{
            flexGrow: 1,
            pt: { xs: '1rem', md: '1.5rem' },
            pr: { xs: '1rem', md: '1.5rem' },
            pb: { xs: '1rem', md: '1.5rem' },
            pl: 0, // no gap from sidebar
            bgcolor: '#F5F5F5',
            overflow: 'auto',
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: '100%',
              bgcolor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '0.75rem',
              p: { xs: '0.75rem', md: '1rem' },
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
            }}
          >
            {/* Header inside the same card */}
            <Header onMenuClick={handleDrawerToggle} embedded />
            
            {/* Page children */}
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;



