import React, { Fragment } from 'react'
import Cards from '../Cards/Cards'
import "./List.css";

const CriaCards = ({ nome, produtos }) => {
    return (
      <Fragment>
        <h2 className='secaotitulo'>{nome}</h2>
        {produtos.map((produto) => (
          <Cards
            key={produto.id}
            img={produto.img}
            nome={produto.nome}
            descricao={produto.desc}
            tempo={produto.tempo}
            preco={produto.preco}
          ></Cards>
        ))}
      </Fragment>
    );
  };

  export default CriaCards