import PropTypes from "prop-types";
import { Fragment } from "react";
import Card from "../Cards/Cards";
import CriaCards from "../CriaCards/CriaCards";
import SubSecao from "../SubSecao/SubSecao";
import styles from "./Secoes.module.css";

const Secoes = ({ nome, produtos, subSecoes, aoFiltrar }) => {
  return (
    <Fragment key={produtos.id}>
      <div className={styles.container}>
        <div className={styles.menu}>
          {subSecoes?.length > 0
            ? subSecoes.map((sub, index) => (
                <ul>
                  <Fragment key={index}>
                    <li>
                      <a onClick={() => aoFiltrar(sub)}>{sub}</a>
                    </li>
                  </Fragment>
                </ul>
              ))
            : []}
        </div>
        <div>
          <h2>{nome}</h2>
          <hr className={styles.separador} />
        </div>

        {subSecoes?.length > 0 ? (
          subSecoes.map((sub, index) => (
            <SubSecao key={index} produtos={produtos} subSecao={sub} />
          ))
        ) : (
          <CriaCards key={produtos.id} produtos={produtos} />
        )}
      </div>
    </Fragment>
  );
};

export default Secoes;

Secoes.propTypes = {
  nome: PropTypes.string.isRequired,
  produtos: PropTypes.array.isRequired,
  //   subSecoes: PropTypes.arrayOf(PropTypes.string),
};
