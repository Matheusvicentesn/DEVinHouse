import { Footer, Header, Secao, FiltroSecao } from '@components';
import { produtos } from '@services';
import { ProdutosSelecionadosProvider } from '@contexts';
import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [filtro, setFiltro] = useState(null);

  const secoes = Array.from(new Set(produtos.map((prod) => prod.secao)));

  const obterProdutosSecao = (secao) => {
    return produtos.filter((p) => p.secao === secao);
  };

  const obterSubSecoes = (secao) => {
    const produtosComSubSecoes = obterProdutosSecao(secao).filter((p) => p.subSecao);

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
    <div className={styles.app}>
      <ProdutosSelecionadosProvider>
        <Header />
        <main className={styles.main}>
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
        </main>
        <Footer />
      </ProdutosSelecionadosProvider>
    </div>
  );
}

export default App;
