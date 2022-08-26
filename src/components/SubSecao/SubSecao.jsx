import PropTypes from "prop-types";
import CriaCards from "../CriaCards/CriaCards";

import styles from "./SubSecao.module.css";

const SubSecao = ({ produtos, subSecao }) => {
  const produtosFiltrados = produtos.filter(
    (prod) => prod.subSecao === subSecao
  );

  return (
    <div className={styles.subSecao}>
      <div>
        <h3>{subSecao}</h3>
        <hr className={styles.separador} />
      </div>

      <CriaCards key={produtos.id} produtos={produtosFiltrados} />
    </div>
  );
};

export default SubSecao;

SubSecao.propTypes = {
  produtos: PropTypes.array.isRequired,
  subSecao: PropTypes.string,
};
