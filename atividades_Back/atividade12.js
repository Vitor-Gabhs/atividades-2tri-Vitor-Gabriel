const express = require('express');
const app = express();

const users = [
  'vitor',
  'laura',
  'victor'
];

const tarefas = [
    'trabalhar',
    'estudar'
];

const mostrar_reservas = [
    'reserva 1',
    'reserva 2',
    'reserva 3'
];

const turmas = [
    'turma 1',
    'turma 2',
    'turma 3'
];

app.get('/', (req, res) => {
  res.send('Sistema no ar');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/reservas', (req, res) => {
  res.json(mostrar_reservas);
});

app.get ('/tarefas', (req, res) => {
    res.json(tarefas);
});

app.get('/turmas', (req, res) => {
  res.json(turmas);
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});