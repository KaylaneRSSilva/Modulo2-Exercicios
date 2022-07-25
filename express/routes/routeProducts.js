const express = require('express');
let produtos = require('../productsTwo');

const routes = express.Router();

// 1. Retornar todos os produtos da array. “/api/products”,
routes.get('/', (_req, res) => {
  res.status(200).json(produtos);
});

// 2. Obter um produto específico pelo ID “/api/products/:id”
routes.get('/:id', (req, res) => {
  const { id } = req.params;

  const findProduct = produtos.filter((product) => product.id === Number(id));

  res.status(200).json(findProduct[0]);
});

// 3. Adicionar um novo produto “/api/products”,
routes.post('/', (req, res) => {
  const newProduct = req.body;

  const addNewProduct = [...produtos, newProduct];

  produtos = addNewProduct;

  res.status(200).json(produtos);
});

// 4. Mudar uma propriedade do produto (qualquer uma) “/api/products/:id”,
routes.put('/:id', (req, res) => {
  const newProduct = req.body;
  const { id } = req.params;

  const updateProducts = produtos.map((product) => {
    if(product.id === Number(id)) return newProduct;

    return product;
  });

  produtos = updateProducts;

  res.status(201).json(produtos);
});

// 5. Deletar um produto utilizando o ID “/api/products/:id”.
routes.delete('/:id', (req, res) => {
  const { id } = req.params;

  const findProduct = produtos.filter((product) => product.id === Number(id));

  if (!findProduct[0]) return res.status(404).json({ message: 'Product not found!' });

  const deleteProduct = produtos.filter((product) => product.id !== Number(id));

  produtos = deleteProduct;

  res.status(204).json(produtos);
});

module.exports = routes;