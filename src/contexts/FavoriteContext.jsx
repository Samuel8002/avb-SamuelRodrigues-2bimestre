// src/contexts/FavoriteContext.jsx
import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (estado) => {
    const isFavorito = favoritos.some((item) => item.id === estado.id);
    if (isFavorito) {
      setFavoritos(favoritos.filter((item) => item.id !== estado.id));
    } else {
      setFavoritos([...favoritos, estado]);
    }
  };

  const isFavoritado = (id) => favoritos.some((item) => item.id === id);

  return (
    <FavoriteContext.Provider value={{ favoritos, toggleFavorito, isFavoritado }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoriteContext);
