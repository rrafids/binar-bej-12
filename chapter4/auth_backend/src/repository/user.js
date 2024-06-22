const users = [
  {
    id: 1,
    name: "Adit",
    email: "adit@gmail.com",
    password: "Adit123",
  },
  {
    id: 2,
    name: "han vir",
    email: "hanvir@gmail.com",
    password: "HanVir123",
  },
  {
    id: 3,
    name: "Adit",
    email: "adit@gmail.com",
    password: "Adit123",
  }
];

class UserRepository {
  constructor() {
    this.users = users;
  }

  getAll() {
    return this.users;
  }

  getByEmail(email) {
    // Get ke array
    // TODO: get ke database
    return this.users.find(user => user.email === email);
  }

  insert(user) {
    // TODO: insert data ke database
  }
}

module.exports = UserRepository;