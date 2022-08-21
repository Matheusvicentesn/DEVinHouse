import PropTypes from "prop-types";
import Card from "../Cards/Cards";
import CriaCards from "../CriaCards/CriaCards";
import SubSecao from "../SubSecao/SubSecao";
import styles from "./Secoes.module.css";

const Secoes = ({ nome, produtos, subSecoes }) => {
  return (
    <div className={styles.container}>
      {/* {console.log(subSecoes)} */}
      <div>
        <h2>{nome}</h2>
        <hr className={styles.separador} />
      </div>

      {subSecoes?.length > 0 ? (
        subSecoes.map((sub, index) => (
          <SubSecao key={index} produtos={produtos} subSecao={sub} />
        ))
      ) : (
        <CriaCards produtos={produtos} />
      )}
    </div>
  );
};

export default Secoes;

Secoes.propTypes = {
  nome: PropTypes.string.isRequired,
  produtos: PropTypes.array.isRequired,
  //   subSecoes: PropTypes.arrayOf(PropTypes.string),
};
