import React, { Fragment } from "react";
import CriaCards from "../CriaCards/CriaCards";
import './Produtos.css'

const Produtos = ({ nome, produtos, subSecao }) => {

  return (
    <Fragment>
      <h2 className="categoria">{nome}</h2>
      <hr />
      <p>{subSecao}</p>
      <CriaCards produtos={produtos} />
    </Fragment>
  );
};
export default Produtos;
