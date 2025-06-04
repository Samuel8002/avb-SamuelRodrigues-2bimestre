import React from 'react';
import { useFavoritos } from '../contexts/FavoriteContext';

const FavoriteButton = ({ estado }) => {
  const { favoritos, toggleFavorito } = useFavoritos();

  const isFavoritado = favoritos.some((item) => item.id === estado.id);

  return (
    <button
      onClick={() => toggleFavorito(estado)}
      className="text-red-500 hover:text-red-600 transition-colors duration-200 text-xl"
      aria-label="Favoritar"
    >
      <span style={{ fontWeight: 'bold' }}>
        {isFavoritado ? '❤️' : '🤍'}
      </span>
    </button>
  );
};

export default FavoriteButton;
