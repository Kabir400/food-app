const ApiResponse = require("../../utils/ApiResponse.js");
const ApiError = require("../../utils/ApiError.js");
const TryCatch = require("../../utils/TryCatch.js");
const userModel = require("../../model/user.model.js");

const getAddresses = TryCatch(async (req, res, next) => {
  const { _id } = req.user;

  // Fetch the user's addresses
  const user = await userModel.findById(_id, "address");
  if (!user) {
    return next(new ApiError(404, "User not found."));
  }

  const apiResponse = new ApiResponse(
    200,
    "Addresses fetched successfully.",
    true,
    user.address
  );

  return res.status(apiResponse.status).json(apiResponse);
});

module.exports = getAddresses;
