import { v4 as uuidv4 } from "uuid";

//Buscar Pizzas
export function findAllPizzas(request, response) {
  response.json(pizzas);
}

//Cadastrar Pizzas
export function registerPizza(request, response) {
  const pizza = {
    id: uuidv4(),
    name: request.body.name,
    description: request.body.description,
    price: request.body.price,
    ingredients: request.body.ingredients,
  };
  pizzas.push(pizza);

  response.status(201).json(pizza);
}
