import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFavoritos } from '../../contexts/FavoriteContext';

const Detalhes = () => {
  const { id } = useParams();
  const [estado, setEstado] = useState(null);
  const { favoritos, toggleFavorito } = useFavoritos();

  useEffect(() => {
    axios
      .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}`)
      .then((response) => {
        setEstado(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!estado) return <p className="text-center mt-20">🔄 Carregando detalhes...</p>;

  const isFavorito = favoritos.some((item) => item.id === estado.id);

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">📋 Detalhes do Estado</h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">📍 {estado.nome}</h2>
        <p className="text-gray-600 mb-2">🆔 ID: {estado.id}</p>
        <p className="text-gray-600 mb-2">🔤 Sigla: {estado.sigla}</p>
        <p className="text-gray-600">🌍 Região: {estado.regiao.nome}</p>

        <button
          onClick={() => toggleFavorito(estado)}
          className="mt-6 text-2xl transition-transform hover:scale-125"
        >
          {isFavorito ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default Detalhes;
