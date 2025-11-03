import { Box, Link } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import authFrame from '../assets/authFrame.png';

const AuthLayout = ({ children, showBackButton = false, backButtonPath = '/login' }) => {
  const navigate = useNavigate();
  
  return (
    <div className="h-screen flex bg-white py-4 px-4 overflow-hidden">
      <Box className="w-full flex h-full rounded-2xl  overflow-hidden">
        {/* Left Section - Image */}
        <Box
          className="relative hidden md:flex rounded-l-2xl"
          sx={{
            width: '70%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${authFrame})`,
              backgroundSize: 'contain',           // ⬅️ shows full image
              backgroundPosition: 'center',         // center the image
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#fff',              // fill behind image
              borderRadius: '1rem 0 0 1rem',
            }}
          />
        </Box>

        {/* Right Section - Form */}
        <Box
          className="flex flex-col justify-center items-center bg-white w-full md:w-[40%] rounded-r-2xl px-10"
          sx={{
            height: '100%',
            position: 'relative',
          }}
        >
          {/* Back to Login button positioned at top, aligned with form content */}
          {showBackButton && (
            <Link
              component="button"
              type="button"
              onClick={() => navigate(backButtonPath)}
              sx={{
                position: 'absolute',
                top: '1.5rem',
                left: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                color: '#666',
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover': {
                  color: '#333',
                },
              }}
            >
              <ArrowBack sx={{ marginRight: '0.5rem', fontSize: '1rem' }} />
              <span className="text-sm font-semibold">Back to Login</span>
            </Link>
          )}
          <Box className="w-full max-w-sm">{children}</Box>
        </Box>
      </Box>
    </div>
  );
};

export default AuthLayout;
