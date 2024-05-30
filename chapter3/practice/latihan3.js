class User {
  constructor(name, email, password) {

  }
}

class Car {
  constructor(carName, color, price) {

  }
}



let users = [
  {
    name: "javid",
    email: "javid@binar.com",
    password: "123456",
    greeting: function () { return "Halo! saya " + this.name },
    greeting2: function () { return "Halo! saya " + users[0].name },
  },
  { name: "ario", email: "ario@binar.com", password: "ario123" },
  { name: "ismail", email: "ismail@binar.com", password: "ismail123" },
  { carName: "Avanza", "price": 1000000 }
];

async function updateUserByEmail(user) {
  // TODO: Buatlah function untuk mengupdate data user berdasarkan email 
  // Kembalikkan error jika user tidak ada
  // !Clue: bisa buat array baru yang sesuai dengan input parameter, 
  // lalu value dari array baru dimasukkan ke array lama
}

async function deleteUserByEmail(email) {
  // TODO: Buatlah function untuk menghapus data user berdasarkan email
  // Kembalikkan error jika user tidak ada
  // !Clue: bisa buat array baru yang sesuai dengan input parameter, 
  // lalu value dari array baru dimasukkan ke array lama
}

async function getListUser() {
  return users;
}

function main() {
  console.log(users[0].greeting());
}

main();