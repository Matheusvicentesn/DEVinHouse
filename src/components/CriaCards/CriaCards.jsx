import React, { Fragment } from "react";
import Cards from "../Cards/Cards";
import styles from "./CriaCards.module.css";

const CriaCards = ({ produtos }) => {
  const [idSelecionados, setIdSelecionados] = useState([])
  return (
    <ul className={styles.lista}>
      {produtos.map((produto) => (
        <li className={styles.listaItem} key={produto.id}>
          <Cards
            produto={produto}
            selecionado={false}
            onSelecionar={() => console.log(`Clicou no card`)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CriaCards;
