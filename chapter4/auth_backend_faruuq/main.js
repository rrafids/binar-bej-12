const express = require('express');
const app = express();
const PORT = 3000;

// Import layers
const UserRepository = require('./src/repository/user');
const UserService = require('./src/service/user');
const UserHandler = require('./src/handler/user');
const ProductHandler = require('./src/handler/product');
const ProductService = require('./src/service/product');
const ProductRepository = require('./src/repository/product');

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.hostname}${req.url}`);
  next();
}

app.use(express.json());
app.use(logger);

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);
const productRepository = new ProductRepository();
const productService = new ProductService(userRepository, productRepository)
const productHandler = new ProductHandler(productService)

app.get('/users', userHandler.getAll);
app.get('/users/:email', userHandler.getByEmail);

app.post('/login', userHandler.login);
app.post('/register', userHandler.register);

app.post('/products', productHandler.create);
app.get('/products', productHandler.getAll);

app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

// Arsitektur Backend NodeJS
// 3 layers:
// 1. Handler
// 2. Service
// 3. Repository

// bisnis logic semuanya di service