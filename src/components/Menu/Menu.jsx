import React from "react";
import { useEffect, useState } from "react";
import "./Menu.css";
import PropType from "prop-types";

const Menu = ({ aoFiltrar }) => {
  return (
    <div className="menu">
      <ul>
        <li>
          <a onClick={() => aoFiltrar(null)}>Todos os pratos</a>
        </li>
        <li>
          <a onClick={() => aoFiltrar("pizzas")}>Pizzas</a>
        </li>
        <li>
          <a onClick={() => aoFiltrar("bebidas")}>Bebidas</a>
        </li>
        <li>
          <a onClick={() => aoFiltrar("Pratos Principais")}>
            Pratos Principais
          </a>
        </li>
        <li>
          <a onClick={() => aoFiltrar("sobremesas")}>Sobremesas</a>
        </li>
        <li>
          <a onClick={() => aoFiltrar("saladas")}>Saladas</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

Menu.propType = {
  acaoFiltrar: PropType.func.isRequired,
};
