class UserRepository {
  constructor(users = []) {
    // TODO:
    this.users = users
  }

  getAll() {
    // TODO:
    return this.users
  }

  add(user) {
    // TODO:
    this.users.push({
      name: user.name,
      email: user.email,
      password: user.password
    })
    console.log(`${user.email} has been added`)
  }

  getByID(id) {
    // TODO:
    return this.users[id]
  }

  getByEmail(email) {
    // TODO:
    for (let i = 0; i < this.users.length; i++) {
      const element = this.users[i];
      if (element.email === email) {
        return element
      }
      
    }
    return null
  }

  deleteByID(id) {
    // TODO:
    this.users.splice(id, 1)
  }
}

module.exports = UserRepository;