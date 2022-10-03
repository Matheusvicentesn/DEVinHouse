function showFullName(nome, sobrenome) {
  console.log(`Olá ${nome} ${sobrenome}`);
}
function calcImc(peso, altura) {
  console.log(peso / (altura * altura));
}

function calcResult(n1, n2, n3) {
  const result = (n1 + n2 + n3) / 3;
  if (result >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

function calcImcFeedBack(peso, altura) {
  const result = peso / (altura * altura);
  console.log(result);
  if (result < 24) {
    console.log("Peso ideal");
  } else if (result < 29) {
    console.log("Sobrepeso");
  } else if (result < 34) {
    console.log("Obesidade I");
  } else if (result < 39) {
    console.log("Obesidade II");
  } else if (result > 40) {
    console.log("Obesidade III");
  }
}

showFullName("Matheus", "Vicente");
calcImc(95, 1.8);
calcResult(7, 7, 7);
calcResult(7, 6, 7);
calcImcFeedBack(100, 1.8);

const students = [
  {
    name: "Zero",
    value: 8.7,
  },
  {
    name: "Vicente",
    value: 7,
  },
  {
    name: "João",
    value: 6,
  },
  {
    name: "Maria",
    value: 6,
  },  {
    name: "Leticia",
    value: 9,
  },
];

function getFilterStudents() {
    console.log(students.filter((student) => student.value >= 7))
}

getFilterStudents()
