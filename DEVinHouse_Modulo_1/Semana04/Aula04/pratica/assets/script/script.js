function clique() {
    let input = document.getElementById("texto").value;
    const li = document.createElement("li");
    li.textContent = input;
    const ul = document.getElementById("lista");
    ul.appendChild(li);
  }