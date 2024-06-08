class UserHandler {
  constructor(userService) {
    this.userService = userService;
  }

  getAll = (req, res) => {
    const users = this.userService.getAll();

    res.status(200).send({
      users: users
    });
  }

  getByEmail = (req, res) => {
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

  #responseToFE = (isSuccess, data, errorMessage) => {
    if (isSuccess) {
      return {
        status: "Success",
        data: data
      }
    } else {
      return {
        status: "Failed",
        error: {
          message: errorMessage
        }
      }
    }
  }

  register = (req, res) => {
    // TODO:
    // return 201 (created) ketika berhasil
    // gagal return 400
    const user = req.body;
    if (this.#isValidUser(user)) {
      this.userService.register(user).then(result => {
        res.status(201).send()
      }).catch(error => {
        res.status(400).send(this.#responseToFE(false, null, error));
      })
    } else {
      res.status(400).send(this.#responseToFE(false, null, "Invalid argument"));
    }
  }

  #isValidUser = (user) => {
    return user?.name != null &&
    user?.email != null &&
    user?.password != null;
  }

  login = (req, res) => {
    // TODO:
    // return 200 (OK) ketika berhasil
    // gagal return 400
    const user = req.body
    const existingUser = this.userService.getByEmail(user.email)
    console.log(">>> Existing user")
    console.log(existingUser)
    if (existingUser && existingUser.password === user.password) {
      res.status(200).send(this.#responseToFE(true, existingUser, null))
    } else {
      res.status(400).send(this.#responseToFE(false, null, 'Wrong email or password'))
    }
  }
}

module.exports = UserHandler;
