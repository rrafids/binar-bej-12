class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getAll = () => {
    return this.userRepository.getAll()
  }

  getByEmail = (email) => {
    const user = this.userRepository.getByEmail(email);

    if (user === undefined) {
      return null;
    }

    return user;
  }

  register = (user) => {
    try {
      return(this.userRepository.add(user))
    } catch (error) {
      throw error
    }
  }
}

module.exports = UserService;