import React from 'react'

const Filter = () => {
  return (
    <div className="filter-container">
      <input
        placeholder="Busque por uma dica..."
        type="text"
        className="inputField"
      />
      <button className="searchButton">Buscar</button>
      <button className="searchButton">Limpar</button>
    </div>
  );
}

export default Filter