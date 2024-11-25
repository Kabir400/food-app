const express = require("express");
const router = express.Router();

//middlewares
const validate = require("../middleware/validate.js");
const userValidator = require("../middleware/userValidator.js");
const loginValidator = require("../middleware/loginValidator.js");

//controllers
const signup = require("../controller/user/signup.js");
const login = require("../controller/user/login.js");
const logout = require("../controller/user/logout.js");

//routes
router.post("/signup", userValidator, validate, signup);
router.post("/login", loginValidator, validate, login);
router.post("/logout", logout);

module.exports = router;
