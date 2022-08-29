import ProdutosSelecionadosContext from "./ProdutosSelecionadosContext";
import PropTypes from "prop-types";
import { useState } from "react";

const ProdutosSelecionadosProvider = ({ children }) => {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const isSelecionado = (id) => {
    return produtosSelecionados.some((item) => item.id === id);
  };

  const handleSelecionar = (produto) => {
    if (isSelecionado(produto.id)) {
      setProdutosSelecionados(
        produtosSelecionados.filter((item) => item.id !== produto.id)
      );
      return;
    }

    setProdutosSelecionados([...produtosSelecionados, produto]);
  };

  const limparProdutos = () => {
    setProdutosSelecionados([]);
  };
  return (
    <ProdutosSelecionadosContext.Provider
      value={{
        produtosSelecionados,
        isSelecionado,
        handleSelecionar,
        limparProdutos,
      }}
    >
      {children}
    </ProdutosSelecionadosContext.Provider>
  );
};

ProdutosSelecionadosProvider.propTypes = {
  children: PropTypes.node,
};

export default ProdutosSelecionadosProvider