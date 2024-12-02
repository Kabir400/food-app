const ApiResponse = require("../../utils/ApiResponse.js");
const ApiError = require("../../utils/ApiError.js");
const TryCatch = require("../../utils/TryCatch.js");
const resturantModel = require("../../model/resturant.model.js");

const mongoose = require("mongoose");

const getSimilarResturant = TryCatch(async (req, res, next) => {
  const { id } = req.params;

  // Convert id to ObjectId if necessary
  if (!mongoose.Types.ObjectId.isValid(id)) {
    next(new ApiError(400, "Invalid restaurant ID"));
  }

  const resturants = await resturantModel.find({ _id: { $ne: id } });

  const apiresponse = new ApiResponse(
    200,
    "Similar restaurants found successfully",
    true,
    resturants
  );
  return res.status(apiresponse.status).json(apiresponse);
});

module.exports = getSimilarResturant;
