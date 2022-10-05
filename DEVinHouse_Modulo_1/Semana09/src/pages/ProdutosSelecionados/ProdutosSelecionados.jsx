import { ListaCards } from "@components";
import { useProdutosSelecionados } from "@contexts";
import styles from "./ProdutosSelecionados.module.css";

export const ProdutosSelecionados = () => {
  const { produtosSelecionados, clear } = useProdutosSelecionados();
  const total = produtosSelecionados.reduce((soma, item) => {
    return soma + item.valor;
  }, 0);

  return (
    <>
      <h1>Produtos Selecionados</h1>
      <h2>{`Total: R$ ${total.toFixed(2).replace(".", `,`)}`}</h2>
      <button className={styles.button} onClick={clear}>Limpar seleção de produtos</button>
      <ListaCards produtos={produtosSelecionados} />
    </>
  );
};
