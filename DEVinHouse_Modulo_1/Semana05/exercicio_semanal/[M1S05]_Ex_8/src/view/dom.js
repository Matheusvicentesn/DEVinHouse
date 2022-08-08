function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function elementProduto(produto) {
  const listItemEl = document.createElement("li");
  listItemEl.innerText = `${produto.nome} - ${
    produto.quantidade
  } - ${formatCurrency(produto.preco)}`;

  return listItemEl;
}

function printProds(list) {
  //
  const labelEl = document.createElement("label");
  labelEl.htmlFor = "produtos";
  labelEl.innerText = "produtos";
  // <label for="produtos">produtos</label>;

  const listEl = document.createElement("ul");
  listEl.name = "produtos";
  // <ul name="produtos" ></ul>

  list.forEach((prod) => {
    listEl.appendChild(elementProduto(prod));
    // <ul name="produtos">
    //   <li> ... dados do produto</li>
    // </ul>
  });

  return [labelEl, listEl];
}

export function elementPedido(pedido) {
  const el = document.createElement("li");
  el.innerHTML = /*html*/ `
    <p>PEDIDO No. ${pedido.numeroPedido}</p>
    <p>Data: ${pedido.dataPedido}</p>
    <p>Cliente: ${pedido.nomeCliente}</p>
    <p>Total: ${formatCurrency(pedido.calcularTotal())}</p>
    <p>Está pago?: ${pedido.estaPago ? "Sim" : "Não"}</p>
  `;
  // const resultado = printProds(pedido.listaProdutos);
  // const label = resultado[0];
  // const lista = resultado[1];

  const [label, lista] = printProds(pedido.listaProdutos);

  el.appendChild(label);
  el.appendChild(lista);
  return el;
}
