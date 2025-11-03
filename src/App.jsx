import { ThemeProvider, CssBaseline } from '@mui/material';
import AppRoutes from './routes/AppRoutes';
import theme from './utils/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;