const mongoose = require("mongoose");
const ApiResponse = require("../../utils/ApiResponse.js");
const ApiError = require("../../utils/ApiError.js");
const TryCatch = require("../../utils/TryCatch.js");
const Review = require("../../model/review.model.js");
const Resturant = require("../../model/resturant.model.js");

const addReview = TryCatch(async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { rating, comment, resturantId } = req.body;

    // Validate input
    if (!rating || !comment || !resturantId) {
      return next(new ApiError(400, "All fields are required"));
    }

    // Validate restaurant ID
    if (!mongoose.Types.ObjectId.isValid(resturantId)) {
      return next(new ApiError(404, "Invalid restaurant ID"));
    }

    // Check if the restaurant exists
    const resturant = await Resturant.findById(resturantId).session(session);
    if (!resturant) {
      return next(new ApiError(404, "Restaurant not found"));
    }

    // Create a new review
    const newReview = await Review.create(
      [
        {
          rating,
          comment,
          user: req.user._id,
          resturant: resturantId,
        },
      ],
      { session }
    );

    // Calculate the new average rating and increment the review count
    const newNoOfReviews = resturant.noOfReviews + 1;
    const newRating =
      (resturant.rating * resturant.noOfReviews + rating) / newNoOfReviews;

    // Update the restaurant
    resturant.rating = newRating;
    resturant.noOfReviews = newNoOfReviews;
    await resturant.save({ session });

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    // Prepare API response
    const apiresponse = new ApiResponse(
      201,
      "Review added successfully",
      true,
      newReview
    );
    return res.status(apiresponse.status).json(apiresponse);
  } catch (error) {
    // Rollback the transaction on error
    await session.abortTransaction();
    session.endSession();

    // Pass the error to the next middleware
    return next(new ApiError(500, "Internal Server Error"));
  }
});

module.exports = addReview;
