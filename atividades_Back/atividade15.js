const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor rodando com sucesso!");
});

let tarefa = [
    { id: 1, titulo: "Ler Café com Deus Pai"},
    { id: 2, titulo: "Ir á Reunião de Pais"},
    { id: 3, titulo: "Frequentar a Aula de Matemática"},
    { id: 4, titulo: "Frequentar a Aula de História"}
];

app.get('/tarefa', (req, res) => {
    res.json(tarefa);
});

app.get('/tarefa/:id', (req, res) => {
    const id = Number(req.params.id);
    const tarefaEncontrada = tarefa.find(item => item.id === id);
    if (!tarefaEncontrada) {
        return res.status(404).json({ mensagem: 'tarefa não encontrada' });
    };
    res.json(tarefaEncontrada);
});

app.post('/tarefa', (req, res) => {
    const novaTarefa = {
        id: tarefa.length + 1,
        titulo: req.body.titulo
    };
    tarefa.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

app.put('/tarefa/:id', (req, res) => {
    const id = Number(req.params.id);
    const tarefaEncontrada = tarefa.find(item => item.id === id);  

    if (!tarefaEncontrada) {
        return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    };

tarefaEncontrada.titulo = req.body.titulo;
res.json(tarefaEncontrada);
});

app.delete('/tarefa/:id', (req, res) => {
    const id = Number(req.params.id);
    tarefa = tarefa.filter(item => item.id !== id);
    res.json({mensagem: "tarefa removida."});
});

//------------------------------------------------------------------------------

let usuario = [
    { id: 1, nome: "Matheus", email: "matheus@email.com"},
    { id: 2, nome: "Renam", email: "renam@email.com"},
    { id: 3, nome: "Maria", email: "maria@email.com"},
    { id: 4, nome: "João", email: "joao@email.com"}
];

app.get('/usuario', (req, res) => {
    res.json(usuario);
});

app.get('/usuario/:id', (req, res) => {
    const id = Number(req.params.id);
    const usuarioEncontrado = usuario.find(item => item.id === id);
    if (!usuarioEncontrado) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    };
    res.json(usuarioEncontrado);
});

app.post('/usuario', (req, res) => {
    const novoUsuario = {
        id: usuario.length + 1,
        nome: req.body.nome,
        email: req.body.email
    };
    usuario.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

app.put('/usuario/:id', (req, res) => {
    const id = Number(req.params.id);
    const usuarioEncontrado = usuario.find(item => item.id === id);  

    if (!usuarioEncontrado) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    };

usuarioEncontrado.nome = req.body.nome;
usuarioEncontrado.email = req.body.email;

res.json(usuarioEncontrado);
});

app.delete('/usuario/:id', (req, res) => {
    const id = Number(req.params.id);
    usuario = usuario.filter(item => item.id !== id);
    res.json({mensagem: "Usuário removido."});
});