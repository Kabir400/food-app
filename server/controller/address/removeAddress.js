const ApiResponse = require("../../utils/ApiResponse.js");
const ApiError = require("../../utils/ApiError.js");
const TryCatch = require("../../utils/TryCatch.js");

const userModel = require("../../model/user.model.js");

const removeAddress = TryCatch(async (req, res, next) => {
  const { addressId } = req.params;
  const { _id } = req.user;
  // Validate required fields
  if (!addressId) {
    return next(new ApiError(400, "Address ID is required."));
  }

  // Find the user
  const user = await userModel.findById(_id);
  if (!user) {
    return next(new ApiError(404, "User not found."));
  }

  // Check if the address exists in the user's address array
  const addressIndex = user.address.findIndex(
    (address) => address._id.toString() === addressId
  );
  if (addressIndex === -1) {
    return next(new ApiError(404, "Address not found."));
  }

  // Remove the address from the array
  user.address.splice(addressIndex, 1);

  // Save the updated user document
  await user.save();

  const apiResponse = new ApiResponse(
    200,
    "Address deleted successfully.",
    true,
    user.address
  );

  return res.status(apiResponse.status).json(apiResponse);
});

module.exports = removeAddress;
