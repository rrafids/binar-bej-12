users = [
  {
    name: "Jono",
    email: "jono@binar.com",
    password: "jono1123"
  }
]

const userPostgres = new UserRepositoryPostgres(users);
const userService = new UserService(userPostgres);

const userToRegister = {
  name: "abby",
  email: "abby@binar.com",
  password: "abby123"
}

console.log("[userService] register(): ", JSON.stringify(userService.register(userToRegister)))

const userToLogin = {
  email: "abby@binar.com",
  password: "abby123"
}

console.log("[userService] login(): ", JSON.stringify(userService.login(userToLogin)))