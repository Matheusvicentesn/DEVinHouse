import styles from "./Cards.module.css";
import PropTypes from "prop-types";

const Card = ({produto, selecionado, onSelecionar}) => (
  <div className={styles.card}>
    <img
      className={styles.img}
      alt="Foto do prato"
      src={produto.img}
      height={200}
    />
    <div className={styles.info}>
      <h2 className={styles.infoTitulo}>{produto.nome}</h2>

      <p className={styles.infoDescricao}>{produto.desc}</p>
    </div>
    <div className={styles.footer}>
      <strong className={styles.footerValor}>{produto.preco}</strong>

      <p>{produto.tempo}</p>
    </div>
  </div>
);

Card.propTypes = {
  selecionado: PropTypes.bool.isRequired,
  onSelecionar: PropTypes.func.isRequired,
  produto: PropTypes.shape({
    img: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired,
    tempo: PropTypes.string.isRequired,
  }),
};

export default Card;


