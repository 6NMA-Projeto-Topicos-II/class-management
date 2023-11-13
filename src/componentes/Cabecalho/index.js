import React from 'react';
import './style.css';


const Cabecalho = ({ onSelectChange }) => {
  const estados = ['Todos', 'Disponível', 'Acesso Livre', 'Manutenção', 'Em Aula'];

  const handleSelectChange = (event) => {
    const selectedEstado = event.target.value;
    onSelectChange(selectedEstado);
  };
  return (
    <div className="campoFiltro">
      <h1>Laboratório de informática</h1>
      <label className="legendaFiltro" htmlFor="selectEstado">Filtros </label>
      <select id="selectEstado" onChange={handleSelectChange}>
        {estados.map((estado) => (
          <option key={estado} value={estado}>
            {estado}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Cabecalho;
