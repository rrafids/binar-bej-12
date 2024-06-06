const User = require('./user');
// const Product = require('./product');

function main() {
  console.log(isThisAccessable())
  console.log(User.isActiveAccount);

  // TODO: Panggil class user dan melakukan insert data
  const binarUsers = new User([]);

  console.log("List binar user: ", binarUsers);

  const newUser = {
    name: "fairuz",
    email: "fairuz@gmail.com",
    password: "fairuzpassword"
  }

  binarUsers.create(newUser.name, newUser.email, newUser.password);

  console.log("List binar user: ", binarUsers);

  // !info: tidak bisa diakses karena method private
  // binarUsers.#filterByEmail(newUser.email);
}

main();