import { v4 as uuidv4 } from "uuid";

//Buscar Pedidos
export function findAllSolicitations(request, response) {
  response.json([]);
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
  };
  solicitations.push(solicitation);

  response.status(201).json(solicitation);
}

//Buscar Pedido
export function findSolicitation(request, response) {
  const solicitation = solicitations.find(
    (solicitation) => solicitation.id === request.params.id
  );

  if (!solicitation) {
    response.status(404).json({ error: "Pedido não encontrado" });
  }
  response.json(solicitation);
}
