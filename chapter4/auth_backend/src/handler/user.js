class UserHandler {
  constructor(userService) {
    this.userService = userService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.getByEmail = this.getByEmail.bind(this);
  }

  getAll(req, res) {
    const users = this.userService.getAll();
    
    res.status(200).send({
      users: users
    });
  }

  getByEmail(req, res) {
    const email = req.params.email;
    const user = this.userService.getByEmail(email);

    let statusCode = 200;

    if (user === null) {
      statusCode = 404;
    }

    res.status(statusCode).send({
      user: user
    });
  }

  register(req, res) {
    // TODO:
    // return 201 (created) ketika berhasil
    // gagal return 400
  }

  login(req, res) {
    // TODO:
    // return 200 (OK) ketika berhasil
    // gagal return 400
  }
}

module.exports = UserHandler;
