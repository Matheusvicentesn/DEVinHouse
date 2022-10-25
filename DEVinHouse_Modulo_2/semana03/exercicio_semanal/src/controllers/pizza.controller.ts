import { v4 as uuidv4 } from "uuid";
import {
  destroyPizzaInLocalJson,
  findPizzasFromLocalJson,
  registerPizzaInLocalJson,
} from "../utils/connections.js";

import { Request, Response } from "express";
import { Pizza } from "../types/pizzas.types.js";

//Buscar Pizzas
export function findAllPizzas(request: Request, response: Response) {
  const pizzas = findPizzasFromLocalJson();
  response.json(pizzas);
}

//Cadastrar Pizzas
export function registerPizza(request: Request<{}, {}, Pizza>, response: Response) {
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

//Deletar pizzza
export function destroyPizza(request: Request, response: Response) {
  const pizzas = findPizzasFromLocalJson();
  const pizzasFiltred = pizzas.filter(
    (pizza: { id: string; }) => pizza.id !== request.params.id
  );
  console.log(pizzasFiltred);
  destroyPizzaInLocalJson(pizzasFiltred);
  response.json();
}
