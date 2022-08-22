import React, { Fragment } from "react";
import Cards from "../Cards/Cards";
import styles from "./CriaCards.module.css";
import { useState } from "react";

const CriaCards = ({ produtos }) => {
  const [idSelecionados, setIdSelecionados] = useState([])
  const handleSelecionar = (idASelecionar) => {
    console.log(idASelecionar)
  }
  return (
    <ul className={styles.lista}>
      {produtos.map((produto) => (
        <li className={styles.listaItem} key={produto.id}>
          <Cards
            produto={produto}
            selecionado={false}
            onSelecionar={() => {handleSelecionar(produto.id)}}
          />
        </li>
      ))}
    </ul>
  );
};

export default CriaCards;
