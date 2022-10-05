const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const tasks = [];

app.get("/tasks", (request, response) => {
  response.json(tasks);
});

app.post("/tasks", (request, response) => {
  const task = {
    id: uuidv4(),
    title: request.body.title,
    description: request.body.description,
    limit_date: request.body.limit_date,
    status: false,
    created_at: new Date().toLocaleDateString("pt-BR"),
  };
  tasks.push(task);

  response.status(201).json(task);
});

app.listen(3333, () => {
  console.log("Servidor");
});
