function idade() {
    let entrada = parseInt(document.getElementById("entrada").value);
    let resposta = document.getElementById("resposta");
    if (entrada <= 15) {
      resposta.innerHTML = "Você é jovem";
    } 
    else if( entrada >= 65){
      resposta.innerHTML = "Você é Idoso";
    }
    else if( entrada => 16 && entrada <= 64){
      resposta.innerHTML = "Você é adulto";
    }
  }