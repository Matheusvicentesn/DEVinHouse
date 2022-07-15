var listaConvidados = [
  { nome: "José", sobrenome: "Carlos" },
  { nome: "Alessandro", sobrenome: "Viana" },
  { nome: "Paula", sobrenome: "Souza" },
  { nome: "Cristian", sobrenome: "Schimit" },
  { nome: "Beatriz", sobrenome: "Viana" },
  { nome: "Fernanda", sobrenome: "Silveira" },
  { nome: "Cláudia", sobrenome: "Torres" },
  { nome: "Augusto", sobrenome: "Cesar" },
  { nome: "Noemi", sobrenome: "Nakamura" },
  { nome: "Pedro", sobrenome: "Lobo" },
];


var lista = document.createElement("ul");

listaConvidados.forEach(nomes)
function nomes(listaConvidados) {
  let item = document.createElement("li");
  item.innerHTML = listaConvidados.nome +" " + listaConvidados.sobrenome;
  lista.appendChild(item);
  document.getElementById("lista").appendChild(lista);
}

