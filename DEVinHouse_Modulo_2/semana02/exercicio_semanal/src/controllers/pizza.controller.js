import { v4 as uuidv4 } from "uuid";
import {
  findPizzasFromLocalJson,
  registerPizzaInLocalJson,
} from "../connections/connection.js";

//Buscar Pizzas
export function findAllPizzas(request, response) {
  const pizzas = findPizzasFromLocalJson();
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
  registerPizzaInLocalJson(pizza);

  response.status(201).json(pizza);
}
