const { body } = require("express-validator");

const foodValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("img").notEmpty().withMessage("Image URL is required"),
  body("toppings").notEmpty().withMessage("Toppings are required"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("resturant").notEmpty().withMessage("Restaurant ID is required"),
  body("category")
    .isIn([
      "Burgers",
      "Fries",
      "Snacks",
      "Salads",
      "Cold drinks",
      "Happy Meal®",
      "Desserts",
      "Hot drinks",
      "Sauces",
      "Orbit®",
    ])
    .withMessage("Invalid category"),
  body("items").notEmpty().withMessage("Items are required"),
];

module.exports = foodValidator;
