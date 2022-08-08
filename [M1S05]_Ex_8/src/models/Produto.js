export class Produto {
  nome;
  preco;
  emEstoque;
  quantidade;

  constructor(nome, preco, emEstoque, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.emEstoque = emEstoque;
    this.quantidade = quantidade;
  }
}
