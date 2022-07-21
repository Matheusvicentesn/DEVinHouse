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
  //teste
  //console.log(contas) teste
  select.innerHTML = contas;
}
window.onload(preencherNomes(contasClientes));

// var id = "";
// var valor = "";
// var opcao = "";
// var total = "";
// var contaCliente = "";

function captura() {
  let id = parseInt(document.getElementById("contas").value);
  let valor = parseInt(document.getElementById("valor").value);
  let opcao = document.getElementById("opcao").value;
  let operacao = document.getElementById("operacao");
  let contaCliente = contasClientes.find(function (contaCliente) {
    return contaCliente.id === id;
  });

  function comparar() {
    if (opcao === "sacar") {
      console.log("saque selecionado");
      sacar();
    } else if (opcao === "depositar") {
      console.log("Depositar selecionado");
      depositar();
    }
  }
  comparar();
  //teste
  console.log(id, valor, opcao, operacao, contaCliente);

  function sacar() {
    if (valor > contaCliente.saldo) {
      alert(`Saldo insuficiente! Saldo Atual ${contaCliente.saldo}`);
    } else if (isNaN(valor)) {
      alert(`Valor invalido`);
    } else {
      var saldoAntigo = contaCliente.saldo;
      contaCliente.saldo -= valor;
      var exibir = `Nome do cliente: ${contaCliente.nome} <br/> Saque realizado no valor: ${valor} <br/> Saldo atual: ${contaCliente.saldo} <br/> Saldo anterior:${saldoAntigo}`;
      operacao.innerHTML = exibir;
      //teste
      console.log(contaCliente.saldo, saldoAntigo);
    }
  }

  function depositar() {
    if (valor <= 0) {
      alert(`Valor invalido`);
    } else if (isNaN(valor)) {
      alert(`Valor invalido`);
    } else {
      var saldoAntigo = contaCliente.saldo;
      contaCliente.saldo += valor;
      var exibir = `Nome do cliente: ${contaCliente.nome} <br/> Deposito realizado no valor: ${valor} <br/> Saldo atual: ${contaCliente.saldo} <br/> Saldo anterior:${saldoAntigo}`;
      operacao.innerHTML = exibir;
      //teste
      console.log(contaCliente.saldo, saldoAntigo);
    }
  }


}
