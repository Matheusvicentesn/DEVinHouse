const cors = require("cors");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors())
app.use(express.json());

let pizzas = [];
let solicitations = [];

//Buscar Pizzas
app.get("/pizzas", (request, response) => {
  response.json(pizzas);
});

//Cadastrar Pizzas
app.post("/pizzas", (request, response) => {
  const pizza = {
    id: uuidv4(),
    name: request.body.name,
    description: request.body.description,
    price: request.body.price,
    ingredients: request.body.ingredients,
  };
  pizzas.push(pizza);

  response.status(201).json(pizza);
});

//Buscar Pedidos
app.get("/solicitations", (request, response) => {
  response.json(solicitations);
});

//Buscar Pedido
app.get("/solicitations/:id", (request, response) => {
  const solicitation = solicitations.find(
    (solicitation) => solicitation.id === request.params.id
  );

  if (!solicitation) {
    response.status(404).json({ error: "Pedido não encontrado" });
  }
  response.json(solicitation);
});

//Cadastrar Pedido
app.post("/solicitations", (request, response) => {
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
});

app.listen(3333, () => {
  console.log("Servidor Rodando");
});
