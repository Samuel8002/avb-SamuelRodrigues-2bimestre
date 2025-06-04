import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFavoritos } from '../../contexts/FavoriteContext';

const Home = () => {
  const [estados, setEstados] = useState([]);
  const { favoritos, toggleFavorito } = useFavoritos();

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const estadosOrdenados = response.data.sort((a, b) => a.nome.localeCompare(b.nome));
        setEstados(estadosOrdenados);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <span
          className="inline-block globe hover:animate-spin-slow"
          role="img"
          aria-label="globo"
        >
          🌎
        </span>
        Estados do Brasil 🇧🇷
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {estados.map((estado) => {
          const isFav = favoritos.some(fav => fav.id === estado.id);

          return (
            <div
              key={estado.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between transition-all duration-300 hover:scale-120"
            >
              <Link to={`/detalhes/${estado.id}`} className="text-center mb-4">
                <h2 className="text-xl font-bold">
                  📍 {estado.nome}
                </h2>
                <p className="text-sm text-gray-500">Sigla: {estado.sigla}</p>
              </Link>

              <button
                onClick={() => toggleFavorito(estado)}
                className="text-2xl mt-2 transition-transform hover:scale-125"
              >
                {isFav ? '❤️' : '🤍'}
              </button>
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default Home;
