class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  register({ name, email, password }) {
    // TODO:
    // 1. Lakukan penambahan data user kedalam database (melalui class repository)
    // 2. Pastikan untuk mengecek apakah email sudah terdaftar atau belum, jika sudah terdaftar, kembalikan error
    // 3. Jika berhasil kembalikan data user yang sudah berhasil ditambahkan
    const existingUser = this.userRepository.getByEmail(email)
    if (!existingUser) {
      const newUser = {
        name: name,
        email: email,
        password: password
      }
      this.userRepository.add(newUser)
      return newUser
    }
  }

  login({ email, password }) {
    // TODO:
    // 1. Lakukan pengecekan ke database (melalui repository)
    // 2. Ketika email dan password ada dan sesuai, kembalikan pesan "Login berhasil"
    // 3. Jika tidak kembalikkan error "Email atau password salah"
    const foundUser = this.userRepository.getByEmail(email)
    if (foundUser && foundUser.password === password) {
      console.log("Success Login!")
    } else {
      console.log("Failed Login!")
    }
  }
}

module.exports = UserService;