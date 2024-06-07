class UserHandler {
  constructor(userService) {
    this.userService = userService;

    // Binding
    this.getAll = this.getAll.bind(this);
  }

  getAll(req, res) {
    const users = this.userService.getAll();

    res.send({
      users: users
    });
  }

  register(req, res) {

  }

  login(req, res) {

  }
}

module.exports = UserHandler;
