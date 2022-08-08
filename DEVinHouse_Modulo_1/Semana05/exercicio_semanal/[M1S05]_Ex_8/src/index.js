import { Pedido } from "./models/Pedido.js";
import { Produto } from "./models/Produto.js";
import { elementPedido } from "./view/dom.js";

const prod1 = new Produto("Fusca preto", 40_000, true, 1);
const prod2 = new Produto("Kombi ciano", 10_000, false, 0);
const prod3 = new Produto("Chevette verde", 6_500, true, 2);
const prod4 = new Produto("Opala grafite", 20_000, true, 1);
const prod5 = new Produto("Maverick vermelho", 35_000, true, 5);

const pdMatheus = new Pedido("20220001", "Matheus ");
const pdLeticia = new Pedido("20220002", "Leticia");

pdMatheus.adicionarProduto(prod1);
pdLeticia.adicionarProduto(prod4);


const pedidos = [pdMatheus, pdLeticia];
const pedidosEl = document.getElementById("pedidos");

pedidos.forEach((pedido) => {
  pedidosEl.appendChild(elementPedido(pedido));
});
