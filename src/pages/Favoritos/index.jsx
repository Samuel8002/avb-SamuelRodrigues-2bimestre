import React from 'react';
import { useFavoritos } from '../../contexts/FavoriteContext';
import { Link } from 'react-router-dom';

const Favoritos = () => {
  const { favoritos, toggleFavorito } = useFavoritos();

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        Meus Favoritos
      </h1>

      {favoritos.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Nenhum estado favoritado ainda.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {favoritos.map((estado) => (
            <div
              key={estado.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300"
            >
              <Link to={`/detalhes/${estado.id}`} className="text-center mb-4">
                <h2 className="text-xl font-bold">📍 {estado.nome}</h2>
                <p className="text-sm text-gray-500">Sigla: {estado.sigla}</p>
              </Link>

              <button
                onClick={() => toggleFavorito(estado)}
                className="text-2xl mt-2 transition-transform hover:scale-125"
              >
                ❤️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
