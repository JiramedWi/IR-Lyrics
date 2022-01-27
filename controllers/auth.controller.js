var jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const token = jwt.sign(
    { username: req.body.username },
    process.env.JWT_SECRET,
    {
      expiresIn: 10000,
    }
  );
  res.status(200).json({ status: "success", token });
};
