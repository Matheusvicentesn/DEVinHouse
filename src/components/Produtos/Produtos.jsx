import React, { Fragment } from "react";
import CriaCards from "../CriaCards/CriaCards";
import { useEffect, useState } from "react";
import "./Produtos.css";


const Produtos = ({ nome, produtos, subSecao }) => {
  return (
    <Fragment>
      <div className="produtos">
        <h2>{nome}</h2>
        <hr />
        <p cstyle={{color: "red"}} >{subSecao}</p>
        <CriaCards produtos={produtos} />
      </div>
    </Fragment>
  );
};
export default Produtos;
