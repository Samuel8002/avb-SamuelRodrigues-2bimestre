// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';  // Importando o Routes e o Route
import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';

export default function AppRoutes() {
  return (
    <Routes>  {/* Usando Routes para definir as rotas */}
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:id" element={<Detalhes />} />
    </Routes>
  );
}
