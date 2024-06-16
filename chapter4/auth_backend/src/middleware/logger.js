function logger(req, res, next) {
  console.log("Req: " + req.method + " " + req.url);
  next();
}

module.exports = logger;