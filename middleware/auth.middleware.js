const loginMiddleware = (req, res, next) => {
  if (req.body.username === "admin" && req.body.password === "admin") {
    next();
  } else {
    res.send("Wromg username and password");
  }
};

module.exports = loginMiddleware;
