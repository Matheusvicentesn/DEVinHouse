const contasClientes = [
  {
    id: 1,
    nome: "Matheus Vicente",
    saldo: 1000,
  },
  {
    id: 2,
    nome: "Maria Luzia",
    saldo: 1555,
  },
  {
    id: 3,
    nome: "Nicolas Raupp",
    saldo: 1700,
  },
];

// Preencher lista de nomes
let select = document.getElementById("contas");

function preencherNomes(list) {
  let contas = list
    .map((list) => `<option value=${list.nome}>${list.nome}</option>`)
    .join("\n");
  //console.log(contas) teste
  select.innerHTML = contas;
}
window.onload(preencherNomes(contasClientes));
