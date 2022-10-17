import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  findAllSolicitations,
  registerSolicitation,
  findSolicitation,
} from "../controllers/solicitation.controller.js";

const solicitationsRoutes = Router();

//Buscar Pedidos
solicitationsRoutes.get("/solicitations", findAllSolicitations);

//Buscar Pedido
solicitationsRoutes.get("/solicitations/:id", findSolicitation);

//Cadastrar Pedido
solicitationsRoutes.post("/solicitations", registerSolicitation);

export default solicitationsRoutes;
