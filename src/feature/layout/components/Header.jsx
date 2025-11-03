import { Box, InputBase, IconButton, Avatar, Typography } from '@mui/material';
import { Search, NotificationsOutlined } from '@mui/icons-material';
import { drawerWidth } from './Sidebar';

const Header = ({ onMenuClick }) => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: '1rem', md: '2rem' },
        py: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
      }}
    >
      {/* Mobile Menu Button */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={onMenuClick}
        sx={{ mr: 2, display: { md: 'none' } }}
      >
        <Box
          sx={{
            width: '1.5rem',
            height: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ width: '100%', height: '2px', bgcolor: '#000', borderRadius: '1px' }} />
          <Box sx={{ width: '100%', height: '2px', bgcolor: '#000', borderRadius: '1px' }} />
          <Box sx={{ width: '100%', height: '2px', bgcolor: '#000', borderRadius: '1px' }} />
        </Box>
      </IconButton>

      {/* Search Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#F5F5F5',
          borderRadius: '0.5rem',
          px: '1rem',
          py: '0.5rem',
          flex: 1,
          maxWidth: { xs: '100%', md: '400px' },
          mr: { xs: '1rem', md: '2rem' },
        }}
      >
        <Search sx={{ color: '#9E9E9E', fontSize: '1.25rem', mr: '0.75rem' }} />
        <InputBase
          placeholder="Search"
          sx={{
            flex: 1,
            fontSize: '0.875rem',
            '& input::placeholder': {
              color: '#9E9E9E',
              opacity: 1,
            },
          }}
        />
      </Box>

      {/* Right Section - Notifications & User Profile */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Notification Icon */}
        <IconButton
          sx={{
            color: '#5A6678',
            '&:hover': {
              bgcolor: 'rgba(248, 6, 157, 0.1)',
            },
          }}
        >
          <NotificationsOutlined />
        </IconButton>

        {/* User Avatar & Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Box
            sx={{
              position: 'relative',
              width: '2.5rem',
              height: '2.5rem',
            }}
          >
            <Box
              component="img"
              src="https://i.pravatar.cc/150?img=12"
              alt="Alice Whitaker"
              onError={(e) => {
                // Fallback to a default avatar if image fails to load
                e.target.src = 'https://ui-avatars.com/api/?name=Alice+Whitaker&background=F8069D&color=fff&size=128';
              }}
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #F8069D',
                boxSizing: 'border-box',
                display: 'block',
              }}
            />
          </Box>
          <Typography
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: '#1A1A1A',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            Alice Whitaker
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

