import { Router } from "express";

//controler
import {
  findAllPizzas,
  registerPizza,
} from "../controllers/pizza.controller.js";

const pizzasRoutes = Router();

//Buscar Pizzas
pizzasRoutes.get("/pizzas", findAllPizzas);

//Cadastrar Pizzas
pizzasRoutes.post("/pizzas", registerPizza);

export default pizzasRoutes;
