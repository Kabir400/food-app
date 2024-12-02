const TryCatch = require("../../utils/TryCatch.js");
const ApiResponse = require("../../utils/ApiResponse.js");
const ApiError = require("../../utils/ApiError.js");
const mongoose = require("mongoose");

const Food = require("../../model/food.model.js");

const getFood = TryCatch(async (req, res, next) => {
  const { resturantId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(resturantId)) {
    next(new ApiError(400, "Invalid restaurant ID"));
  }

  const foods = await Food.find({ resturant: resturantId });

  const apiresponse = new ApiResponse(
    200,
    "Foods fetched successfully",
    true,
    foods
  );
  return res.status(apiresponse.status).json(apiresponse);
});

module.exports = getFood;
