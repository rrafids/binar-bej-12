class IUserRepository {
  constructor() {
    if (this.constructor === IUserRepository) {
      throw new Error('USER_REPOSITORY.CANNOT_INSTANTIATE_FROM_ABSTRACT_CLASS');
    }
  }

  getAll() {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  add(user) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  getByID(id) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  getByEmail(email) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  deleteByID(id) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

// TODO: Lengkapi class dibawah agar dapat melakukan manipulasi data users
class UserRepositoryPostgres extends IUserRepository {
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

  getByEmail(email) {
    // TODO:
  }

  deleteByID(id) {
    // TODO:
  }
}

class IUserService {
  constructor() {
    if (this.constructor === IUserService) {
      throw new Error('USER_SERVICE.CANNOT_INSTANTIATE_FROM_ABSTRACT_CLASS');
    }
  }

  register({ name, email, password }) {
    throw new Error('USER_SERVICE.METHOD_NOT_IMPLEMENTED');
  }

  login({ email, password }) {
    throw new Error('USER_SERVICE.METHOD_NOT_IMPLEMENTED');
  }
}

class UserService extends IUserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  register({ name, email, password }) {
    // TODO:
    // 1. Lakukan penambahan data user kedalam database (melalui class repository)
    // 2. Pastikan untuk mengecek apakah email sudah terdaftar atau belum, jika sudah terdaftar, kembalikan error
    // 3. Jika berhasil kembalikan data user yang sudah berhasil ditambahkan
  }

  login({ email, password }) {
    // TODO:
    // 1. Lakukan pengecekan ke database (melalui repository)
    // 2. Ketika email dan password ada dan sesuai, kembalikan pesan "Login berhasil"
    // 3. Jika tidak kembalikkan error "Email atau password salah"
  }
}

// !info: Implement UserRepository salah (karena abstract class)
// const userRepo = new UserRepository();
// console.log(userRepo.getAll());

// !info: Repo Implementation
// users = [
//   {
//     "id": 1,
//     "name": "John",
//   }
// ]

// const userPostgres = new UserRepositoryPostgres(users)

// console.log("[userRepositoryPostgres] getAll(): " + JSON.stringify(userPostgres.getAll()))
// console.log("[userRepositoryPostgres] add(): " + JSON.stringify(userPostgres.add({
//   id: 2,
//   name: "Danto"
// })))
// console.log("[userRepositoryPostgres] getByID(): " + JSON.stringify(userPostgres.getByID(1)))
// console.log("[userRepositoryPostgres] deleteByID(): " + JSON.stringify(userPostgres.deleteByID(1)))
// console.log("[userRepositoryPostgres] getAll(): " + JSON.stringify(userPostgres.getAll()))

// !info: Service Implementation
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

