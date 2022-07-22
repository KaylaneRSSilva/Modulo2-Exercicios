const express = require('express');

const app = express();

const HTTP_OK = 200;

app.use(express.json());

// Exercício 2 - Aula 1
app.get('/', (_req, res) => {
  res.status(HTTP_OK).send('Hello World!');
});

app.listen('3001', () => {
  console.log('Aplicação ouvindo na porta 3001');
});