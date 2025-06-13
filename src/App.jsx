import { ThemeProvider, createTheme, Box } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Quiz from './pages/Quiz';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          py: 4,
          px: 2,
        }}
      >
        <Quiz />
      </Box>
    </ThemeProvider>
  );
}

export default App;
