class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getAll() {
    const users = this.userRepository.getAll();

    return users;
  }

  getByEmail(email) {
    const user = this.userRepository.getByEmail(email);

    if (user === undefined) {
      return null;
    }

    return user;
  }
}

module.exports = UserService;