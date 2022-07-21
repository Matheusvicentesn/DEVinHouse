const contasClientes = [
  {
    id: 0,
    nome: "Matheus Vicente",
    saldo: 1000,
  },
  {
    id: 1,
    nome: "Maria Luzia",
    saldo: 1555,
  },
  {
    id: 2,
    nome: "Nicolas Raupp",
    saldo: 1700,
  },
];

// Preencher lista de nomes
let select = document.getElementById("contas");

function preencherNomes(list) {
  let contas = list
    .map((list) => `<option value=${list.id}>${list.nome}</option>`)
    .join("\n");
  //console.log(contas) teste
  select.innerHTML = contas;
}
window.onload(preencherNomes(contasClientes));

var id = "";
var valor = "";
var opcao = "";
var total = "";

function captura() {
  var id = parseInt(document.getElementById("contas").value);
  var valor = parseInt(document.getElementById("valor").value);
  var opcao = document.getElementById("opcao").value;
  let operacao = document.getElementById("operacao");
  console.log(id, valor, opcao);
  let contaCliente = contasClientes.find(function (contaCliente) {
    return contaCliente.id === id;
  });

  function sacar() {
    var saldoAntigo = contaCliente.saldo;
    contaCliente.saldo -= valor;
    var exibir = `Nome do cliente: ${contaCliente.nome} <br/> Saque realizado no valor: ${valor} <br/> Saldo atual: ${contaCliente.saldo} <br/> Saldo anterior:${saldoAntigo}`;
    operacao.innerHTML = exibir;
    console.log(contaCliente.saldo, saldoAntigo);
  }


  if (valor > contaCliente.saldo) {
    alert(`Saldo insuficiente! Saldo Atual ${contaCliente.saldo}`);
  } else if (opcao === "sacar") {
    console.log("saque selecionado");
    sacar();
  }

  console.log(contaCliente);
  return id, valor, opcao;
}


