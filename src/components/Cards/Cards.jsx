import styles from "./Cards.module.css";
import PropTypes from "prop-types";

const Card = ({produto}) => (
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
  produto: PropTypes.shape({
    img: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired,
    tempo: PropTypes.string.isRequired,
  }),
};

export default Card;

// const Cards = ({ img, nome, descricao, tempo, preco }) => {
//   return (
//       <div className="content">
//         <img src={img} />
//         <h3>{nome}</h3>
//         <p>{descricao}</p>
//         <p>{tempo}</p>
//         <h6>{preco}</h6>

//         <button>Adicionar ao carrinho</button>
//       </div>

//   );
// };

// export default Cards;

// Cards.propTypes = {
//   img: PropType.string.isRequired,
//   nome: PropType.string.isRequired,
//   descricao: PropType.string.isRequired,
//   tempo: PropType.string.isRequired,
//   preco: PropType.string.isRequired,
// };
