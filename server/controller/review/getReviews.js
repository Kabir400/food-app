const ApiResponse = require("../../utils/ApiResponse.js");
const ApiError = require("../../utils/ApiError.js");
const TryCatch = require("../../utils/TryCatch.js");
const mongoose = require("mongoose");
const reviewModel = require("../../model/review.model.js");

const getReviews = TryCatch(async (req, res, next) => {
  const { id } = req.params;

  // Validate restaurant ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ApiError(404, "Invalid restaurant ID"));
  }

  // Fetch reviews by restaurant ID and populate user details
  const reviews = await reviewModel
    .find({ resturant: id })
    .populate("user", "name img country")
    .sort({ createdAt: -1 }); // Sort by newest reviews first

  // Check if reviews exist
  if (!reviews || reviews.length === 0) {
    return next(new ApiError(404, "No reviews found for this restaurant"));
  }

  // Create an API response object
  const apiresponse = new ApiResponse(
    200,
    "Reviews fetched successfully",
    true,
    reviews
  );

  // Send response
  return res.status(apiresponse.status).json(apiresponse);
});

module.exports = getReviews;
