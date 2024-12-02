const TryCatch = require("../../utils/TryCatch.js");
const ApiResponse = require("../../utils/ApiResponse.js");
const ApiError = require("../../utils/ApiError.js");

const Food = require("../../model/food.model.js");
const Restaurant = require("../../model/resturant.model.js");

const addFood = TryCatch(async (req, res, next) => {
  const { title, img, toppings, price, resturant, category, items } = req.body;

  // Check if the restaurant exists
  const restaurantExists = await Restaurant.findById(resturant);
  if (!restaurantExists) {
    next(new ApiError(404, "Restaurant not found"));
  }

  // Create a new food item
  const newFood = new Food({
    title,
    img,
    toppings,
    price,
    resturant,
    category,
    items,
  });

  // Save to database
  const savedFood = await newFood.save();

  const apiResponse = new ApiResponse(
    200,
    "Food added successfully",
    true,
    savedFood
  );
  return res.status(ApiResponse.status).json(apiResponse);
});

module.exports = addFood;
