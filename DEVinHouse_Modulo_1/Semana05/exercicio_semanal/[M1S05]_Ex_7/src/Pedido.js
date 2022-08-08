import { Produto } from "./Produto.js";

export class Pedido {
  constructor(numPedido, nomeCliente) {
    this.numPedido = numPedido;
    this.nomeCliente = nomeCliente;
    this.dataPedido = new Date().toLocaleString();
    this.pago = false;
    this.listaProdutos = [];
  }

  adicionarProduto(produto) {
    if (produto instanceof Produto) {
      this.listaProdutos.push(produto);
    }
  }

  calcularTotal() {
    let total = this.listaProdutos.reduce((ant, atu) => {
      return ant + atu.preco * atu.quantidade;
    }, 0);
    return total;
  }
}
