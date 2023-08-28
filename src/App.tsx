import { AuthContextProvider } from './context/AuthContext';
import Routes from './routes/Routes'

function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
