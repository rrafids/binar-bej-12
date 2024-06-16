const internalServerErrorHandler = function (err, req, res, next) {
  console.log("error: ", err);

  res.status(500).send({
    status: "fail",
    message: err.message
  })
}

module.exports = internalServerErrorHandler;