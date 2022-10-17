import { v4 as uuidv4 } from "uuid";
import {
  destroySolicitationInLocalJson,
  findSolicitationsFromLocalJson,
  registerSolicitationInLocalJson,
} from "../utils/connections.js";
import fs from "fs";

//Buscar Pedidos
export function findAllSolicitations(request, response) {
  const solicitation = findSolicitationsFromLocalJson();
  response.json(solicitation);
}

//Cadastrar Pedido
export function registerSolicitation(request, response) {
  const solicitation = {
    id: uuidv4(),
    name: request.body.name,
    cpf: request.body.cpf,
    address: request.body.address,
    phone: request.body.phone,
    payment: request.body.payment,
    order_info: request.body.order_info,
    order_status: "EM PRODUÇÃO",
  };
  registerSolicitationInLocalJson(solicitation);

  response.status(201).json(solicitation);
}

//Buscar Pedido
export function findSolicitation(request, response) {
  const solicitations = findSolicitationsFromLocalJson();
  const solicitation = solicitations.find(
    (solicitation) => solicitation.id === request.params.id
  );

  if (!solicitation) {
    response.status(404).json({ error: "Pedido não encontrado" });
  }
  response.json(solicitation);
}

//Deletar Pedido
export function destroySolicitation(request, response) {
  const solicitation = findSolicitationsFromLocalJson();
  const solicitationFiltred = solicitation.filter(
    (solicitation) => solicitation.id !== request.params.id
  );
  destroySolicitationInLocalJson(solicitationFiltred);
  response.json();
}

// Atualizar status do pedido Há caminho
export function updateStatusDelivering(request, response) {
  const solicitations = findSolicitationsFromLocalJson();

  const updatedSolicitations = solicitations.map((solicitation) => {
    if (solicitation.id === request.params.id) {
      solicitation.order_status = "HÁ CAMINHO";
    }
    return solicitation;
  });

  fs.writeFileSync(
    "localStorage/solicitations.json",
    JSON.stringify(updatedSolicitations)
  );

  return response.json();
}

// Atualizar status do pedido entregue
export function updateStatusDelivered(request, response) {
  const solicitations = findSolicitationsFromLocalJson();

  const updatedSolicitations = solicitations.map((solicitation) => {
    if (solicitation.id === request.params.id) {
      solicitation.order_status = "Entregue";
    }
    return solicitation;
  });

  fs.writeFileSync(
    "localStorage/solicitations.json",
    JSON.stringify(updatedSolicitations)
  );

  return response.json();
}

