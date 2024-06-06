class User {
  constructor(users) {
    this.users = users;
  }

  static isActiveAccount = true;

  getAll() {
    return this.users;
  }

  getByEmail(email) {
    return this.#filterByEmail(email);
  }

  create(name, email, password) {
    const user = {
      name: name,
      email: email,
      password: password
    }

    this.users.push(user);
  }

  #filterByEmail(email) {
    for (let i = 0; i < this.users; i++) {
      if (users[i].email === email) {
        return users[i];
      }
    }

    return null;
  }
}

function isThisAccessable() {
  return "yes this is accesable";
}

module.exports = User;