const UserRepository = require('./repository/userRepository')
const UserService = require('./service/userService')

users = [
    {
      name: "Jono",
      email: "jono@binar.com",
      password: "jono1123"
    }
  ]
  
  const userPostgres = new UserRepository(users);
  const userService = new UserService(userPostgres);
  
  const userToRegister = {
    name: "abby",
    email: "abby@binar.com",
    password: "abby123"
  }

  const addedUser = userService.register({
    name: userToRegister.name,
    email: userToRegister.email,
    password: userToRegister.password
  })
  console.log("[userService] register(): ", JSON.stringify(addedUser))

  const userToLogin = {
    email: "abby@binar.com",
    password: "abby123"
  }

  console.log("[userService] login(): ", JSON.stringify(userService.login(userToLogin)))