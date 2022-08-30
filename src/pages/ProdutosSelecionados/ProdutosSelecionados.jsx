import { ListaCards } from "@components";
import { useProdutosSelecionados } from "@contexts";

export const ProdutosSelecionados = () => {
  const { produtosSelecionados } = useProdutosSelecionados();
  const total = produtosSelecionados.reduce((soma, item) => {
    return soma + item.valor;
  }, 0);

  return (
    <>
      <h1>Produtos Selecionados</h1>
      <h2>{`Total: R$ ${total.toFixed(2).replace(".", `,`)}`}</h2>
      <ListaCards produtos={produtosSelecionados} />
    </>
  );
};
