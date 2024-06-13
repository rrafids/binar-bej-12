const express = require('express');
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

app.use(express.json());

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);

app.get('/users', userHandler.getAll);
app.get('/users/:email', userHandler.getByEmail);
app.post('/login', userHandler.login);
app.post('/register', userHandler.register);

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository, userRepository);
const productHandler = new ProductHandler(productService);

// TODO:
// Get products
// [
//  {
//    name: 'hp samsung',
//    price: 20000,
//    user: {
//      name: "han vir",
//      email: 'hanvir@gmail.com'
//    },
//    category: {
//      name: "handphone"
//    }
//  }
// ]
app.get('/products', productHandler.getAll);
app.post('/products', productHandler.create);

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