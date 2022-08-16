import "./Cards.css";
import PropType from "prop-types";

const Cards = ({ img, nome, descricao, tempo, preco }) => {
  return (
    <main className="card">
      <div className="content">
        <img src={img} />
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <p>{tempo}</p>
        <h6>{preco}</h6>

        <button>Adicionar ao carrinho</button>
      </div>
    </main>
  );
};

export default Cards;

Cards.propTypes = {
  img: PropType.string.isRequired,
  nome: PropType.string.isRequired,
  descricao: PropType.string.isRequired,
  tempo: PropType.string.isRequired,
  preco: PropType.string.isRequired,
};
