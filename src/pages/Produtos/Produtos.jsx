import { Fragment, useState } from "react";
import { FiltroSecao, Secao } from "@components";
import { produtos } from "@services";

export const Produtos = () => {
  const [filtro, setFiltro] = useState(null);

  const secoes = Array.from(new Set(produtos.map((prod) => prod.secao)));

  const obterProdutosSecao = (secao) => {
    return produtos.filter((p) => p.secao === secao);
  };

  const obterSubSecoes = (secao) => {
    const produtosComSubSecoes = obterProdutosSecao(secao).filter(
      (p) => p.subSecao
    );

    return Array.from(new Set(produtosComSubSecoes.map((p) => p.subSecao)));
  };

  const obterSecoesFiltradas = () => {
    if (filtro) {
      return secoes.filter((s) => s === filtro);
    }
    return secoes;
  };

  const handleSelecionarSecao = (secao) => {
    if (secao === filtro) {
      setFiltro(null);
      return;
    }
    setFiltro(secao);
  };
  return (
    <Fragment>
      <FiltroSecao
        secoes={secoes}
        secaoSelecionada={filtro}
        onSelecionar={handleSelecionarSecao}
      />

      {obterSecoesFiltradas().map((secao) => (
        <Secao
          key={secao}
          nome={secao}
          produtos={obterProdutosSecao(secao)}
          subSecoes={obterSubSecoes(secao)}
        />
      ))}
    </Fragment>
  );
};
