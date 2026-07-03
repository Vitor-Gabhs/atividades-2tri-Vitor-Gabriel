const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor rodando com sucesso!");
});

app.post('/avisos', (req, res) => {
    const NovoAviso = req.body;
    res.status(201).json({
        messagem: 'Aviso criado.',
        aviso: NovoAviso
    });
});

app.post('/tarefas', (req, res) => {
    const NovaTarefa = req.body;
    res.status(201).json({
        messagem: 'Tarefa criada.',
        tarefa: NovaTarefa
    });
});

app.post('/reservas', (req, res) => {
    const NovaReserva = req.body;
    res.status(201).json({
        messagem: 'Reserva criada.',
        reserva: NovaReserva
    });
});

app.post('/usuarios', (req, res) => {
    const NovoUsuario = req.body;
    res.status(201).json({
        messagem: 'Usuario cadstrado.',
        usuario: NovoUsuario
    });
});