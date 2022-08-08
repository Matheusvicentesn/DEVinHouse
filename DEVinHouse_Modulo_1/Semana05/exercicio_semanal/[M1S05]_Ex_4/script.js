class Pedido{
  constructor(numPedido, nomeCliente){
    this.numPedido = numPedido;
    this.nomeCliente = nomeCliente;
    this.dataPedido = new Date().toLocaleString()
    this.pago = false
    this.listaProdutos = []
  }
}