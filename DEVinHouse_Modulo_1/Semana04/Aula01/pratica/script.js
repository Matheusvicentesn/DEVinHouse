var idade = prompt("Digite sua idade");
var retorno = "";
function voto() {
  if (idade < 16) {
    retorno = "Não pode votar";
  } else if ((idade >= 16 && idade <= 17) || idade >= 70) {
    retorno = "voto opcional";
  } else if (idade >= 18 && idade <= 69) {
    retorno = "voto obrigatorio";
  }
  return retorno;
}
voto();
alert(retorno);
