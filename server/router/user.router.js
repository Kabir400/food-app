const express = require("express");
const router = express.Router();

//middlewares
const validate = require("../middleware/validate.js");
const userValidator = require("../middleware/userValidator.js");
const loginValidator = require("../middleware/loginValidator.js");
const authMiddleware = require("../middleware/checkLogin.js");

//controllers
const signup = require("../controller/user/signup.js");
const login = require("../controller/user/login.js");
const logout = require("../controller/user/logout.js");
const checkLogin = require("../controller/user/checkLogin.js");
const addAddress = require("../controller/address/addAddress.js");
const removeAddress = require("../controller/address/removeAddress.js");
const getAddress = require("../controller/address/getAddress.js");

//routes
router.post("/signup", userValidator, validate, signup);
router.post("/login", loginValidator, validate, login);
router.post("/logout", logout);
router.post("/checklogin", checkLogin);
router.post("/add/address", authMiddleware, addAddress);
router.post("/remove/address/:addressId", authMiddleware, removeAddress);
router.get("/get/address", authMiddleware, getAddress);

module.exports = router;
