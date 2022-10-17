import fs from "fs";
//buscar pizzas
export function findPizzasFromLocalJson() {
  const pizzasFile = fs.readFileSync("pizzas.json").toString();
  const pizzas = JSON.parse(pizzasFile);
  return pizzas;
}

//cadastrar pizza
export function registerPizzaInLocalJson(pizza) {
const pizzasLocal = findPizzasFromLocalJson()
fs.writeFileSync("pizzas.json", JSON.stringify([...pizzasLocal, pizza]));
}
