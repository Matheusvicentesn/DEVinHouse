import { Router } from "express";

import {
  findAllSolicitations,
  registerSolicitation,
  findSolicitation,
  destroySolicitation,
  updateStatusDelivering,
  updateStatusDelivered,
} from "../controllers/solicitation.controller.js";

const solicitationsRoutes = Router();

//Buscar Pedidos
solicitationsRoutes.get("/solicitations", findAllSolicitations);

//Buscar Pedido
solicitationsRoutes.get("/solicitations/:id", findSolicitation);

//Cadastrar Pedido
solicitationsRoutes.post("/solicitations", registerSolicitation);

//Deletar pizzza
solicitationsRoutes.delete("/solicitations/:id", destroySolicitation);

// Atualizar status do pedido há caminho
solicitationsRoutes.patch(
  "/solicitations/:id/delivering",
  updateStatusDelivering
);

// Atualizar status do pedido entregue
solicitationsRoutes.patch(
  "/solicitations/:id/delivered",
  updateStatusDelivered
);

export default solicitationsRoutes;
