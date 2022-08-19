import React from "react";
import "./Menu.css";
import PropType from "prop-types";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="" onClick={() => aoFiltrar("pizzas")}>Pizzas</a>
        </li>
        <li>
          <a href=""onClick={() => aoFiltrar("bebidas")}>Bebidas</a>
        </li>
        <li>
          <a href=""onClick={() => aoFiltrar("pratos_principais")}>Pratos Principais</a>
        </li>
        <li>
          <a href=""onClick={() => aoFiltrar("sobremesas")}>Sobremesas</a>
        </li>
        <li>
          <a href=""onClick={() => aoFiltrar("saladas")}>Saladas</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

Menu.propType = {
  acaoFiltrar: PropType.func.isRequired,
}
