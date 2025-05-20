// Detalhes.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Detalhes = () => {
  const { id } = useParams();
  const [municipios, setMunicipios] = useState([]);
  const [estado, setEstado] = useState(null);

  useEffect(() => {
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}`)
      .then(res => setEstado(res.data))
      .catch(err => console.error(err));

    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`)
      .then(res => setMunicipios(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!estado) return <p className="text-center text-gray-500 mt-12">Carregando estado...</p>;

  return (
    <div className="min-h-screen bg-white text-gray-800 p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">{estado.nome} <span className="text-blue-600">({estado.sigla})</span></h1>

      <h2 className="text-2xl font-medium mb-4 border-b border-gray-300 pb-2">Municípios</h2>

      {municipios.length === 0 ? (
        <p className="text-gray-500">Carregando municípios...</p>
      ) : (
        <ul className="list-disc list-inside space-y-1 max-h-[60vh] overflow-auto text-gray-700">
          {municipios.map(mun => (
            <li key={mun.id} className="hover:text-blue-600 cursor-default">{mun.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Detalhes;
