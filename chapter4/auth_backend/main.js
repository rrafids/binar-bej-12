const express = require('express');
const app = express();
const PORT = 3000;

// Import layers
const UserRepository = require('./src/repository/user')
const UserService = require('./src/service/user')
const UserHandler = require('./src/handler/user')

app.use(express.json());

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);

app.get('/users', userHandler.getAll);
app.get('/users/:email', userHandler.getByEmail);

app.post('/login', userHandler.login);
app.post('/register', userHandler.register);

// TODO:
app.post('/products', productHandler.create);
app.get('/products', productHandler.getAll);

// product {
//   name: 'laptop macbook',
//   price: 20000,
//   user_email: 'hanvir@gmail.com'
// }
// 1. Buat sebuah endpoint baru untuk melakukan create product
// 2. Buat sebuah endpoint baru untuk get all products data beserta data user yg terkait
// 3. Format response (array of objects)
// [
//  {
//    name: 'asd',
//    price: 20000,
//    user: {
//      name: "han vir",
//      email: 'hanvir@gmail.com'
//    }
//  }
// ]
// !clue: di service product -> bakal punya repository untuk product & user

app.listen(PORT, function () {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});

// Arsitektur Backend NodeJS
// 3 layers:
// 1. Handler
// 2. Service
// 3. Repository