function calculadora() {
  var num1;
  var num2;
  var resultado;
  var operador;

  num1 = prompt("Digite o primeiro número");
  num2 = prompt("Digite o segundo número");
  operador = prompt("Digite um operador ( + | - | * | / )");

  if (operador == "+") {
    resultado = Number(num1) + Number(num2);
  } else if (operador == "/") {
    resultado = Number(num1) / Number(num2);
  } else if (operador == "*") {
    resultado = Number(num1) * Number(num2);
  } else if (operador == "-") {
    resultado = Number(num1) - Number(num2);
  } else if ((num1 = !null)) {
    resultado = `Erro ${num1} não é valido`;
  } else if ((num2 = !null)) {
    resultado = `Erro ${num2} não é valido`;
  } else if ((operador = !null)) {
    resultado = `Erro ${operador} não é valido`;
  }

  return resultado;
}
document.getElementById("resultado").innerHTML =
  "resultado é: " + calculadora();
