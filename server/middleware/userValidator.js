const { body } = require("express-validator");
const state = require("../utils/State.js");

const validateUser = [
  body("name")
    .notEmpty()
    .withMessage("Name is required.")
    .isString()
    .withMessage("Name must be a string."),
  body("phone").isMobilePhone("en-IN").withMessage("Invalid phone number."),
  body("email")
    .isEmail()
    .withMessage("Invalid email address.")
    .notEmpty()
    .withMessage("Email is required."),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters.")
    .notEmpty()
    .withMessage("Password is required."),
  body("gender")
    .optional()
    .isIn(["male", "female", "other"])
    .withMessage("Gender must be male, female, or other.")
    .notEmpty()
    .withMessage("Gender is required."),
  body("card.*.cardNumber").isCreditCard().withMessage("Invalid card number."),
  body("card.*.expiryDate").isISO8601().withMessage("Invalid expiry date."),
  body("card.*.cvv")
    .isLength({ min: 3, max: 3 })
    .withMessage("CVV must be 3 digits."),
  body("address.*.state")
    .isString()
    .withMessage("State must be a string.")
    .isIn(state)
    .withMessage("Invalid Indian state."),
  body("address.*.city").notEmpty().withMessage("City is required."),
  body("address.*.pincode")
    .isLength({ min: 6, max: 6 })
    .withMessage("Pincode must be 6 digits."),
  body("address.*.phoneNumber")
    .isMobilePhone("en-IN")
    .withMessage("Invalid phone number."),
  body("address.*.fullAddress")
    .notEmpty()
    .withMessage("Full address is required."),
];

module.exports = validateUser;
