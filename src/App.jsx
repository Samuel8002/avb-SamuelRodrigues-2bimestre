import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import { FavoriteProvider } from './contexts/FavoriteContext'; // ✅ importar o provider

function App() {
  return (
    <BrowserRouter>
      <FavoriteProvider> {/* ✅ envolver tudo com o provider */}
        <Navbar />
        <AppRoutes />
      </FavoriteProvider>
    </BrowserRouter>
  );
}

export default App;
