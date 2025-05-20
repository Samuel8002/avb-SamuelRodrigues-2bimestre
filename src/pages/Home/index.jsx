// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const estadosOrdenados = response.data.sort((a, b) => a.nome.localeCompare(b.nome));
        setEstados(estadosOrdenados);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-10 flex flex-col items-center">
      <h1 className="text-4xl font-semibold mb-10 tracking-tight">Estados do Brasil</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {estados.map(estado => (
          <Link
            key={estado.id}
            to={`/detalhes/${estado.id}`}
            className="border border-gray-300 rounded-md p-5 flex flex-col items-center justify-center hover:border-blue-600 transition-colors"
          >
            <span className="text-lg font-medium mb-1">{estado.nome}</span>
            <span className="text-sm text-gray-500 tracking-wide">{estado.sigla}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
