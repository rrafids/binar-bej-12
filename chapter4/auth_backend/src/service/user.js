class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getAll() {
    const users = this.userRepository.getAll();

    return users;
  }
}

module.exports = UserService;