class UserRepository {
  getAll() {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  add(user) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  getByID(id) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  deleteByID(id) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

// TODO: Lengkapi class dibawah agar dapat melakukan manipulasi data users

class UserRepositoryPostgres extends UserRepository {
  constructor(users = []) {
    // TODO:

  }

  getAll() {
    // TODO:
  }

  add(user) {
    // TODO:
  }

  getByID(id) {
    // TODO:
  }

  deleteByID(id) {
    // TODO:
  }
}

// Implementation
users = [
  {
    "id": 1,
    "name": "John",
  }
]

userPostgres = new UserRepositoryPostgres(users)

console.log("[userRepositoryPostgres] getAll(): " + JSON.stringify(userPostgres.getAll()))
console.log("[userRepositoryPostgres] add(): " + JSON.stringify(userPostgres.add({
  id: 2,
  name: "Danto"
})))
console.log("[userRepositoryPostgres] getByID(): " + JSON.stringify(userPostgres.getByID(1)))
console.log("[userRepositoryPostgres] deleteByID(): " + JSON.stringify(userPostgres.deleteByID(1)))
console.log("[userRepositoryPostgres] getAll(): " + JSON.stringify(userPostgres.getAll()))