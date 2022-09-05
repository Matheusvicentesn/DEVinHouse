import React from "react";
import { useAppContext } from "../context/app-context";

const Filter = () => {
  const { filterTip } = useAppContext();
  return (
    <div className="filter-container">
      <input
        placeholder="Busque por uma dica..."
        type="text"
        className="inputField"
        onChange={(e) => filterTip(e.target.value)}
      />
      <button className="searchButton">Buscar</button>
      <button className="searchButton">Limpar</button>
    </div>
  );
};

export default Filter;
