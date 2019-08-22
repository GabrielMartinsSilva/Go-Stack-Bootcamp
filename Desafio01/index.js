const express = require("express");

const server = express();

server.use(express.json());

// Query params = ?teste=1
//Route params = /users/1
//Request body = {message: "vrau"};

const projetos = [];
var contador = 0;

server.use((res, req, next) => {
  next();
  contador++;

  console.log(`Até o momento foram feitas ${contador} requisições`);
});

function checkIdExists(req, res, next) {
  const { id } = req.params;

  const find = projetos.find(item => item.id === id);

  if (!projetos) {
    return res.status(400).json({ error: "user not exists" });
  }
  return next();
}

server.get("/projects", (req, res) => {
  return res.json(projetos);
});

server.get("/projects/:index", (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.post("/projects", (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  projetos.push({
    id,
    title,
    tarefas: []
  });

  return res.json(projetos);
});

server.put("/projects/:id", checkIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  /* const find = projetos.findIndex(item => item.id === id);

  projetos[find].title = title; */

  const find = projetos.find(item => item.id === id);
  find.title = title;

  return res.json(find);
});

server.delete("/projects/:id", checkIdExists, (req, res) => {
  const { id } = req.params;
  const find = projetos.findIndex(item => item.id === id);
  projetos.splice(find, 1);

  return res.send();
});

server.post("/projects/:id/tasks", checkIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const find = projetos.find(item => item.id === id);

  find.tarefas.push(title);

  return res.json(find);
});

server.listen(3000);
