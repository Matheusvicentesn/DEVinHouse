function estacao() {
  let entrada = document.getElementById("entrada").value;
  let resposta = document.getElementById("resposta");
  console.log(entrada);

  let mes = entrada.substring(5, 7);
  let dia = entrada.substring(8, 10);
  console.log(mes);
  console.log(dia);

  if (
    mes === "01" ||
    mes === "02" ||
    (mes === "12" && dia >= "22") ||
    (mes === "03" && dia <= "21")
  ) {
    resposta.innerHTML =
      "Verão" +
      '<br><img style="width: auto; height: 200px;border-radius: 25px " src="https://images.pexels.com/photos/12812235/pexels-photo-12812235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">';
  } else if (
    (mes === "03" && dia >= "22") ||
    mes === "04" ||
    mes === "05" ||
    (mes === "06" && dia <= "21")
  ) {
    resposta.innerHTML =
      "Outono" +
      '<br><img style="width: auto; height: 200px;border-radius: 25px " src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">';
  } else if (
    (mes === "06" && dia > "21") ||
    mes === "07" ||
    mes === "08" ||
    (mes === "09" && dia <= "21")
  ) {
    resposta.innerHTML =
    "Inverno" +
    '<br><img style="width: auto; height: 200px;border-radius: 25px " src="https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">';
  } else {
    resposta.innerHTML =
    "Primavera" +
    '<br><img style="width: auto; height: 200px;border-radius: 25px " src="https://images.pexels.com/photos/1040911/pexels-photo-1040911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">';
  }
}
