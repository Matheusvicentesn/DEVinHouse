import React, { Fragment } from "react";
import Cards from "../Cards/Cards";
import styles from './CriaCards.module.css';

const CriaCards = ({ produtos }) => (
  <ul className={styles.lista}>
    {produtos.map((produto) => (
      <li className={styles.listaItem} key={produto.id}>
        <Cards produto={produto} selecionado={false}/>
      </li>
    ))}
  </ul>
);

export default CriaCards;
