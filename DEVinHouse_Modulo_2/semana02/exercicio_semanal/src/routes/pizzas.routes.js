import { Router } from "express";

//controler
import {
  destroyPizza,
  findAllPizzas,
  registerPizza,
} from "../controllers/pizza.controller.js";

const pizzasRoutes = Router();

//Buscar Pizzas
pizzasRoutes.get("/pizzas", findAllPizzas);

//Cadastrar Pizzas
pizzasRoutes.post("/pizzas", registerPizza);

//Deletar pizzza
pizzasRoutes.delete("/pizzas/:id", destroyPizza);


export default pizzasRoutes;
