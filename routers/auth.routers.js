const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth.controller");
const loginMiddleware = require("../middleware/auth.middleware");

router.post("/", loginMiddleware, AuthController.login);

module.exports = router;
