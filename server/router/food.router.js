const express = require("express");
const router = express.Router();

//controllers
const addFood = require("../controller/food/addFood.js");
const getFood = require("../controller/food/getFood.js");

//middleware
const validate = require("../middleware/validate.js");
const foodValidator = require("../middleware/foodValidator.js");

//routes
router.post("/add/food", foodValidator, validate, addFood);
router.get("/food/:resturantId", getFood);

module.exports = router;
