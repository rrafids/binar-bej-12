const users = [
  {
    name: "Adit",
    email: "adit@gmail.com",
    password: "Adit123",
  },
  {
    name: "han vir",
    email: "hanvir@gmail.com",
    password: "HanVir123",
  }
];

class UserRepository {
  constructor() {
    this.users = users;
  }

  getAll = () => {
    return this.users
  }

  getByEmail = (email) => {
    return this.users.find(user => user.email === email)
  }

  add = (user) => {
    return new Promise((resolve, reject) => {
      const existingUser = this.getByEmail(user.email)
      if (!existingUser) {
        users.push(user)
        resolve("Success")
      } else {
        reject('User exsited')
      }
    })
  }

  login = () => {

  }
}

module.exports = UserRepository;