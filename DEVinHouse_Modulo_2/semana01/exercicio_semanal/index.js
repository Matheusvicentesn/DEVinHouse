const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(express.json());
let pizzas = [];

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

app.listen(3333, () => {
  console.log("Servidor Rodando");
});
