import fs from "fs";
//buscar pizzas
export function findPizzasFromLocalJson() {
  const pizzasFile = fs.readFileSync("localStorage/pizzas.json").toString();
  const pizzas = JSON.parse(pizzasFile);
  return pizzas;
}

//cadastrar pizza
export function registerPizzaInLocalJson(pizza) {
  const pizzasLocal = findPizzasFromLocalJson();
  fs.writeFileSync(
    "localStorage/pizzas.json",
    JSON.stringify([...pizzasLocal, pizza])
  );
}

//deletar pizza
export function destroyPizzaInLocalJson(pizza) {
  let pizzasLocal = findPizzasFromLocalJson();
  fs.writeFileSync("localStorage/pizzas.json", JSON.stringify(pizzasLocal = [...pizza]));
}

//buscar pedidos
export function findSolicitationsFromLocalJson() {
  const solicitationsFile = fs
    .readFileSync("localStorage/solicitations.json")
    .toString();
  const solicitation = JSON.parse(solicitationsFile);
  return solicitation;
}

//cadastrar solicitação
export function registerSolicitationInLocalJson(solicitation) {
  const solicitationLocal = findSolicitationsFromLocalJson();
  fs.writeFileSync(
    "localStorage/solicitations.json",
    JSON.stringify([...solicitationLocal, solicitation])
  );
}

//deletar pedido
export function destroySolicitationInLocalJson(solicitation) {
  let solicitations = findSolicitationsFromLocalJson();
  fs.writeFileSync(
    "localStorage/solicitations.json",
    JSON.stringify((solicitations = [...solicitation]))
  );
}


