var listaNumeros = [2, 3, 9, 12, 16, 55, 90, 78, 17];
var listaNumerosOriginal = [2, 3, 9, 12, 16, 55, 90, 78, 17];
var lista = document.createElement("ul");
var lista2 = document.createElement("ul");

listaNumeros.forEach(dobro);
function dobro(listaNumeros, indice, valor) {
  let item = document.createElement("li");
  item.innerHTML = listaNumeros * 2;
  lista.appendChild(item);
  document.getElementById("lista").appendChild(lista);
}

listaNumerosOriginal.forEach(normal);
function normal(listaNumerosOriginal, indice, valor) {
  let item = document.createElement("li");
  item.innerHTML = listaNumerosOriginal;
  lista2.appendChild(item);
  document.getElementById("lista2").appendChild(lista2);
}