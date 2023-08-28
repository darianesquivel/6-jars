import { AuthContextProvider } from './context/AuthContext';
import Routes from './routes/Routes'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>

  );
}

export default App;
