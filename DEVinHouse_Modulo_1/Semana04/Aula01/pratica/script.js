var idade = "";
var r = "";

function voto() {

  idade = prompt("Digite sua idade");
  if (idade < "16") {
    alert("Você não pode votar");
  } else if (idade >= 16 && idade <= 17 && idade >= 70) {
    var r = "Voto opcional";
  } else if (idade >= 18 && idade < 69) {
    var r = "Voto opcional";
  }

  return r

}

console.log(r)
