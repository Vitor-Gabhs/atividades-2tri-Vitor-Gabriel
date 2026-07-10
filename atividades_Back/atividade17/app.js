const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let usuarios = [];

app.post('/usuarios', (req, res) => {
    const novoUsuario = { id: usuarios.length + 1, nome: req.body.nome };
    usuarios.push(novoUsuario);
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso'})
});

let tarefas = [];

app.get('/tarefas', (req, res) => {
    res.status(200).json(tarefas);
});

app.post('/tarefas', (req, res) => {
    const novaTarefa = { id: tarefas.length + 1, titulo: req.body.titulo };
    tarefas.push(novaTarefa);
    res.status(201).json({ mensagem: 'Tarefa cadastrada com sucesso'})
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});