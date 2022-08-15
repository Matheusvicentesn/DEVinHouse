import { Pedido } from "./src/Pedido.js";
import { Produto } from "./src/Produto.js";

const prod1 = new Produto('Fusca Vermelho', 40_000, true, 1)
const prod2 = new Produto('Kombi ciano', 10_000, false, 0)
const prod3 = new Produto('Chevette verde', 6_500, true, 2)
const prod4 = new Produto('Opala verde', 20_000, true, 1)
const prod5 = new Produto('Maverick vermelho', 35_000, true, 5)

const pdMatheus = new Pedido('20220001', "Matheus")
const pdLeticia = new Pedido('20220001', "Leticia")

pdMatheus.adicionarProduto(prod3);
pdLeticia.adicionarProduto(prod5);