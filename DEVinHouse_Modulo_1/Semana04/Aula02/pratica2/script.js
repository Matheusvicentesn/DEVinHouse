var resultado = "";

while (numero != -1) {
  var numero = parseInt(prompt("Digite um número"));
  if (numero != -1) {
    resultado = numero += numero;
  } else if (numero === -1) {
    console.log(resultado);
    break;
  }
}
