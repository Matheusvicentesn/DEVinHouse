var convidado = {
  nome: "Haniel",
  sobrenome: "Avelar",
  setor: "camarote",
  idade: 53,
};
var convidado2 = {
  nome: "Oziel",
  sobrenome: "Barateiro",
  setor: "pista",
  idade: 40,
};
var convidado3 = {
  nome: "Johnny",
  sobrenome: "Guilheiro",
  setor: "arquibancada",
  idade: 17,
};
var convidado4 = {
  nome: "Cleide",
  sobrenome: "Proença",
  setor: "camarote",
  idade: 21,
};
var convidado5 = {
  nome: "Brianna",
  sobrenome: "Raposo",
  setor: "pista",
  idade: 16,
};
var convidado6 = {
  nome: "Marwa",
  sobrenome: "Barbalho",
  setor: "arquibancada",
  idade: 17,
};
var convidado7 = {
  nome: "Katerina",
  sobrenome: "Espinosa",
  setor: "camarote",
  idade: 18,
};

var convidado8 = {
  nome: "Maia",
  sobrenome: "Quinzeiro",
  setor: "pista",
  idade: 56,
};
var convidado9 = {
  nome: "Veronika",
  sobrenome: "Bouça",
  setor: "arquibancada",
  idade: 18,
};
var convidado10 = {
  nome: "Lilian",
  sobrenome: "Regueira",
  setor: "camarote",
  idade: 18,
};

var convidado11 = {
  nome: "Hellen",
  sobrenome: "Simas",
  setor: "pista",
  idade: 30,
};
var convidado12 = {
  nome: "Aliya",
  sobrenome: "Arantes",
  setor: "arquibancada",
  idade: 18,
};

var listaDeConvidados = [
  convidado,
  convidado2,
  convidado3,
  convidado4,
  convidado5,
  convidado6,
  convidado7,
  convidado8,
  convidado9,
  convidado10,
  convidado11,
  convidado12,
];
var listamaiordeidade = [];
listaDeConvidados.forEach(function filtro(listaDeConvidados) {
  if (listaDeConvidados.idade >= 18) {
    listaDeConvidados.openbar = true;
  } else if (listaDeConvidados.idade <= 18) {
    listaDeConvidados.openbar = false;
  }
  listamaiordeidade.push(listaDeConvidados);
  return listamaiordeidade;
});

// console.log(listamaiordeidade);

function separarCamarote(lista) {
  var filtrocamarote = lista.filter(
    (convidado) => convidado.setor === "camarote"
  );
  return filtrocamarote;
}

var listaCamarote = separarCamarote(listamaiordeidade);

function separarPista(lista) {
  var filtropista = lista.filter((convidado) => convidado.setor === "pista");
  return filtropista;
}

var listaPista = separarPista(listamaiordeidade);

function separarArquibancada(lista) {
  var filtroarquibancada = lista.filter(
    (convidado) => convidado.setor === "arquibancada"
  );
  return filtroarquibancada;
}

var listaArquibancada = separarArquibancada(listamaiordeidade);

console.log(listaArquibancada);

var lista1 = document.createElement("ul");

listaCamarote.forEach(camarote);
function camarote(listaCamarote) {
  let item = document.createElement("li");
  if (listaCamarote.openbar == true) {
    item.innerHTML = listaCamarote.nome + " " + listaCamarote.sobrenome + "🍹";
  } else if (listaCamarote.openbar == false) {
    item.innerHTML = listaCamarote.nome + " " + listaCamarote.sobrenome;
  }
  lista1.appendChild(item);
  document.getElementById("listaCamarote").appendChild(lista1);
}

var lista2 = document.createElement("ul");

listaPista.forEach(pista);
function pista(listaPista) {
  let item = document.createElement("li");
  if (listaPista.openbar == true) {
    item.innerHTML = listaPista.nome + " " + listaPista.sobrenome + "🍹";
  } else if (listaPista.openbar == false) {
    item.innerHTML = listaPista.nome + " " + listaPista.sobrenome;
  }
  lista2.appendChild(item);
  document.getElementById("listaPista").appendChild(lista2);
}

var lista3 = document.createElement("ul");

listaArquibancada.forEach(arquibancada);
function arquibancada(listaArquibancada) {
  let item = document.createElement("li");
  if (listaArquibancada.openbar == true) {
    item.innerHTML =
      listaArquibancada.nome + " " + listaArquibancada.sobrenome + "🍹";
  } else if (listaArquibancada.openbar == false) {
    item.innerHTML = listaArquibancada.nome + " " + listaArquibancada.sobrenome;
  }
  lista3.appendChild(item);
  document.getElementById("listaArquibancada").appendChild(lista3);
}
