const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor rodando com sucesso!");
});

let tarefa = [
    { id: 1, titulo: "Café com Deus Pai"},
    { id: 2, titulo: "Reunião de Pais"},
    { id: 3, titulo: "Aula de Matemática"},
    { id: 4, titulo: "Aula de História"}
];

app.get('/tarefas', (req, res) => {
    res.json(tarefa);
});

app.post('/tarefas', (req, res) => {
    const novaTarefa = {
        id: tarefa.length + 1,
        titulo: req.body.titulo
    };
    tarefa.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

app.put('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarefaIndex = tarefa.find(item => item.id === id);  

