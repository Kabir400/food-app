const { body } = require("express-validator");

const loginValidator = [
  body("email")
    .isEmail()
    .withMessage("Invalid email address.")
    .notEmpty()
    .withMessage("Email is required."),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters.")
    .notEmpty()
    .withMessage("Password is required."),
];

module.exports = loginValidator;
