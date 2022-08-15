function par() {
    let numero = parseInt(document.getElementById("entrada").value);
    let resposta = document.getElementById("resposta");
    if (numero % 2 === 0) {
      resposta.innerHTML = "Número é par";
    } else {
      resposta.innerHTML = "Número é ímpar";
    }
  }