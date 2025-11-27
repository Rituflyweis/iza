import { ThemeProvider, CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/AppRoutes';
import Loader from './components/Loader';
import theme from './utils/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster />
      <Loader />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;