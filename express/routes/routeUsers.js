const express = require('express');
let users = require('../users');

const routes = express.Router();

// 1. GET para verificar a lista de usuários.
routes.get('/', (_req, res) => {
  res.status(200).json(users);
});

// 2. POST para adicionar um usuário seguindo as propriedades citadas.
routes.post('/', (req, res) => {
  const newUser = req.body;

  const addNewUser = [...users, { id: users.length +1, ... newUser}];

  users = addNewUser;

  res.status(201).json(users);
});

// 3. PUT para modificar informações de um usuário.
routes.put('/:id', (req, res) => {
  const newUser = req.body;
  const { id } = req.params;

  const findUser = users.filter((person) => person.id === Number(id));

  if (!findUser[0]) return res.status(404).json({ message: 'User not found!' });

  const updateUser = users.map((person) => {
    if(person.id === Number(id)) return newUser;

    return person;
  });

  users = updateUser;

  res.status(200).json(users);
});

// 4. DELETE para deletar um usuário.
routes.delete('/:id', (req, res) => {
  const { id } = req.params;

  const findUser = users.filter((person) => person.id === Number(id));

  if (!findUser[0]) return res.status(404).json({ message: 'User not found!' });

  const deleteUser = users.filter((person) => person.id !== Number(id));

  console.log(deleteUser);

  users = deleteUser;

  res.status(204).end();
});

// Bônus: Pesquise sobre o método PATCH e faça um endpoint que permita atualizar APENAS a senha do usuário.
routes.patch('/:id', (req, res) => {
  const { password } = req.body;
  const { id } = req.params;

  const findUser = users.filter((person) => person.id === Number(id));

  if (!findUser[0]) return res.status(404).json({ message: 'Product not found!' });

  const updateUser = users.map((person) => {
    if(person.id === Number(id)) {
      return { ...person, password };
    };

    return person;
  });

  users = updateUser;

  res.status(200).json(users);
});

module.exports = routes;