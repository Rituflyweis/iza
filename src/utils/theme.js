import { createTheme } from '@mui/material';

// Material UI Theme Configuration
// Modify this file to customize the global theme for your entire application
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F8069D',
      light: '#FF4DB8',
      dark: '#C1057D',
      contrastText: '#fff',
    },
    secondary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      '"Manrope"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: '0.5rem',
  },
  spacing: 8, // Default spacing unit
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTabs-flexContainer': {
            flexWrap: 'wrap',
            gap: '0.5rem',
          },
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0.5rem',
          marginRight: '0.5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          minHeight: 36,
          backgroundColor: '#fff',
          color: '#000',
          border: '1px solid #E5E7EB',
          '&.Mui-selected': {
            backgroundColor: '#000',
            color: '#fff',
            border: '1px solid #000',
          },
        },
      },
    },
  },
});

export default theme;
