import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './App.css';

// ⬇️ Importe o FavoriteProvider
import { FavoriteProvider } from './contexts/FavoriteContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </React.StrictMode>
);
