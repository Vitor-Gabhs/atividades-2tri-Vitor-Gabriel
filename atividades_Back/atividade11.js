const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Sistema Escolar no ar');
});

app.get('/equipe', (req, res) => {
    res.send('somos um grupo dedicado a resolver problemas escolares');
});

app.get('/contato', (req, res) => {
    res.send('podemos ser contatados pelo o email vitor.dutra.marques@gmail.com');
});

app.get('/sobre', (req, res) => {
    res.send('projeto para atacar problemas escolares');
});

app.get('/unico', (req, res) => {
    res.send('vitor é o unico no grupo que sabe programar');
});

app.get('/pirado', (req, res) => {
    res.send('vitor nao aguenta mais programar');
});

app.get('/sobre', (req, res) => {
    res.send('vitor também nao gosta do carlo ancelloti');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
