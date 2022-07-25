const express = require('express');
let products = require('./products');

const routesProducts = require('./routes/routeProducts');
const routesUsers = require('./routes/routeUsers');

// Exercício 1 - Aulas ao vivo 1 e 2
const app = express();

const HTTP_OK = 200;

app.use(express.json());

// Exercício 1  - Aula ao vivo 3 
app.use('/api/products', routesProducts);
app.use('/api/users', routesUsers);

// Exercício 2 - Aula 1
// app.get('/', (_req, res) => {
//   res.status(HTTP_OK).send('Hello World!');
// });

// Aula 2
// Exercício 2.1 - POST para adicionar 4 produtos, de uma vez.
// app.post('/products', (req, res) => {
//   let newProducts = req.body;

//   products = [...products, ...newProducts]

//   res.status(201).json(products);
// });

// Exercício 2.2 - PUT para modificar um desses produtos.
// app.put('/products/:id', (req, res) => {
//   const updateProduct = req.body;
//   const { id } = req.params;

//   const productExist = products.find((product) => product.id === Number(id));

//   if(!productExist) return res.status(404).json({ message: 'Produto não encontrado!' })

//   products = products.map((product) => product.id === Number(id) ? updateProduct : product);

//   res.status(201).json(products);
// });

// Exercício 2.3 - DELETE para deletar um desses produtos.
// app.delete('/products/:id', (req, res) => {
//   const { id } = req.params;

//   const productExist = products.find((product) => product.id === Number(id));

//   if(!productExist) return res.status(404).json({ message: 'Produto não encontrado!' })

//   products = products.filter((product) => product.id !== Number(id));

//   res.status(HTTP_OK).json('Produto deletado com sucesso');
// });

// Exercício 2.4 - GET para verificar os que foram mantidos.
// app.get('/products', (_req, res) => {
//   res.status(HTTP_OK).json(products);
// });

app.listen('3001', () => {
  console.log('Aplicação ouvindo na porta 3001');
});