import React, { useState, useEffect } from "react";
import axios from "axios";

function ActoresGame() {
  const [actores, setListadoActores] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const obtenerpersonajes = async () => {
      const url = 'https://thronesapi.com/api/v2/Characters';
      const result = await axios.get(url);
      setListadoActores(result.data);
    };
    obtenerpersonajes();
  }, []);

  useEffect(() => {
    const resultadosFiltrados = actores.filter(persona =>
      persona.fullName.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultados(resultadosFiltrados);
  }, [busqueda, actores]);

  console.log(resultados);

  return (
    <div className="flex flex-col items-center h-screen text-fuchsia-500">
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-4">Actores de Game Of Thrones</h1>
        <br />
        <input
          type="text"
          placeholder="Buscar personaje"
          className="px-4 py-2 rounded-lg bg-white shadow"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <br />
      <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 mt-4">
        {resultados.length === 0 && <p>No se encontraron resultados</p>}
        {resultados.slice(0, 3).map((personas, i) => (
          <li
            key={i}
            className="bg-zinc-800 rounded-lg shadow p-4 text-center"  // Agregar clase text-center
          >
            <h4 className="text-lg font-semibold">{personas.fullName}</h4>
            <div className="bg-zinc-800 p-2 rounded-lg">
              <img
                src={personas.imageUrl}
                alt="img. d actores"
                width="200"
                className="mx-auto my-4"
              />
            </div>
            <h5 className="text-black font-semibold">{personas.family}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActoresGame;
