import React from "react";
import PropTypes from "prop-types";

const TipCard = ({ tip }) => {
  const { titulo, linguagem, categoria, descricao, video } = tip;
  return (
    <div className="tipcard-container">
      <h2 className="title">{titulo}</h2>
      <div className="metadata">
        <div>
          Linguagem: <span className="metaValue">{linguagem}</span>
        </div>
        <div>
          Categoria: <span className="metaValue">{categoria}</span>
        </div>
      </div>
      <div className="content">{descricao}</div>
      <div className="btn-group align-left">
        <button className="btn primary" type="submit">
          editar
        </button>
        {video && (
          <a
            href={video}
            target="_blank"
            className="btn secondary"
            type="submit"
          >
            YouTube
          </a>
        )}
        <button className="btn secondary" type="submit">
          apagar
        </button>
      </div>
    </div>
  );
};

export default TipCard;

TipCard.propTypes = {
  tip: PropTypes.shape({
    id: PropTypes.string,
    titulo: PropTypes.string,
    descricao: PropTypes.string,
    categoria: PropTypes.string,
    linguagem: PropTypes.string,
    video: PropTypes.string,
  }),
};
