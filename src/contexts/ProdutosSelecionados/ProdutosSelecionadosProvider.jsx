import PropTypes from 'prop-types';
import { useState } from 'react';

import { ProdutosSelecionadosContext } from './ProdutosSelecionadosContext';

export const ProdutosSelecionadosProvider = ({ children }) => {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

  const isSelecionado = (id) => {
    return produtosSelecionados.some((item) => item === id);
  };

  const handleSelecionar = (produto) => {
    if (isSelecionado(produto.id)) {
      setProdutosSelecionados(produtosSelecionados.filter((item) => item.id !== produto.id));
      return;
    }

    setProdutosSelecionados([...produtosSelecionados, produto]);
  };

  return (
    <ProdutosSelecionadosContext.Provider
      value={{ produtosSelecionados, isSelecionado, handleSelecionar }}
    >
      {children}
    </ProdutosSelecionadosContext.Provider>
  );
};

ProdutosSelecionadosProvider.propTypes = {
  children: PropTypes.node,
};
