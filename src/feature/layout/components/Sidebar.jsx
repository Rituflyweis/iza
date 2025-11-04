import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import menuItems from '../config/menuItems';
import logo from '../../../assets/logo.png';

const drawerWidth = 280;

const Sidebar = ({ mobileOpen, onMobileClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    if (onMobileClose) {
      onMobileClose();
    }
  };

  const isActive = (path, itemId) => {
    // Special handling for User Management - highlight on all user-related pages
    if (itemId === 'user-management') {
      return location.pathname === path || 
             location.pathname.startsWith('/user-management') ||
             location.pathname.startsWith('/user-detail') ||
             location.pathname.startsWith('/create-user');
    }
    return location.pathname === path;
  };

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#F5F5F5' }}>
      {/* Logo Section */}
      <Box
        sx={{
          p: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="IZA Logo"
          sx={{
            maxWidth: '3rem',
            maxHeight: '3rem',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Navigation Menu */}
      <List sx={{ px: '0.75rem', flex: 1, overflow: 'auto', py: '0.5rem' }}>
        {menuItems.map((item) => {
          const active = isActive(item.path, item.id);
          
          return (
            <ListItem key={item.id} disablePadding sx={{ mb: '0.25rem' }}>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  borderRadius: '0.625rem',
                  minHeight: '3rem',
                  px: '0.75rem',
                  bgcolor: active ? '#F8069D' : 'transparent',
                  color: active ? '#fff' : '#1A1A1A',
                  '&:hover': {
                    bgcolor: active ? '#F8069D' : 'rgba(248, 6, 157, 0.1)',
                  },
                  '& .MuiListItemIcon-root': {
                    color: active ? '#fff' : '#1A1A1A',
                    minWidth: '2.5rem',
                  },
                  '& .MuiListItemText-primary': {
                    fontWeight: active ? 600 : 500,
                    fontSize: '0.875rem',
                    color: active ? '#fff' : '#1A1A1A',
                  },
                }}
              >
                <ListItemIcon>
                  <Icon 
                    icon={item.icon} 
                    width="20"
                    height="20"
                  />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            bgcolor: '#F5F5F5',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            bgcolor: '#F5F5F5',
            position: 'fixed',
            height: '100vh',
            top: 0,
            left: 0,
            zIndex: 1200,
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
export { drawerWidth };

