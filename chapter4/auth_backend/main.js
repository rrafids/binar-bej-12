const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// Import dependecy
// Import repository
const UserRepository = require('./src/repository/user');
const ProductRepository = require('./src/repository/product');

// Import service
const UserService = require('./src/service/user');
const ProductService = require('./src/service/product');

// Import handler
const UserHandler = require('./src/handler/user');
const ProductHandler = require('./src/handler/product');

// Import middleware
const logger = require('./src/middleware/logger');
const internalServerErrorHandler = require('./src/middleware/internalServerError')

app.use(express.json());
app.use(logger);
app.use(express.static('public'));

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);

// Endpoint untuk show images
app.get('/images/binar.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/binar.png'));
})

app.get('/users/:email', userHandler.getByEmail);

// TODO: 
app.get('/users', userHandler.getAll);
app.post('/login', userHandler.login);
app.post('/register', userHandler.register);

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository, userRepository);
const productHandler = new ProductHandler(productService);

// TODO:
// Get products
// [
//  {
//    id: 1,
//    name: 'hp samsung',
//    price: 20000,
//    user: {
//      name: "han vir", -> "hanvir"
//      email: 'hanvir@gmail.com'
//    },
//    category: {
//      name: "handphone"
//    }
//  }
// ]
app.get('/products', productHandler.getAll);
app.post('/products', productHandler.create);
// app.delete('/products/:id') // http://localhost:8000/products/1
// app.put('/products/:id')

// app.get('/categories', productHandler.getAll);
// app.post('/categories', productHandler.create);
// app.delete('/categories/:id') // http://localhost:8000/categories/1
// app.put('/categories/:id')

app.get('/codingan-error', (req, res) => {
  res.send(dataUser);
})

const testRouter = express.Router();

testRouter.use((req, res, next) => {
  console.log("ini middleware khusus endpoint testing");

  next();
})

testRouter.get('/testing', (req, res) => {
  res.send('ini data testing pertama');
})

app.use(testRouter);

app.use(internalServerErrorHandler);
app.use((req, res, next) => {
  res.status(404).send({
    status: "fail",
    message: "not found"
  })
});

app.listen(PORT, function () {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});

// TODO:
// app.get('/categories', productHandler.getAll);
// app.post('/categories', productHandler.create);

// Arsitektur Backend NodeJS
// 3 layers:
// 1. Handler
// 2. Service
// 3. Repository