const ApiResponse = require("../../utils/ApiResponse.js");
const TryCatch = require("../../utils/TryCatch.js");
const resturantModel = require("../../model/resturant.model.js");
const ApiError = require("../../utils/ApiError.js");
const mongoose = require("mongoose");

const getResturant = TryCatch(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    next(new ApiError(404, "Invalid restaurant ID"));
  }

  const resturant = await resturantModel.findById(id);

  if (!resturant) {
    next(new ApiError(404, "Resturant Not Found"));
  }

  const apiresponse = new ApiResponse(
    200,
    "Resturant found successfully",
    true,
    resturant
  );
  return res.status(apiresponse.status).json(apiresponse);
});

module.exports = getResturant;
