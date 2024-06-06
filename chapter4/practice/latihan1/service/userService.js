class UserService {
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