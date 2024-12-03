const ApiResponse = require("../../utils/ApiResponse.js");
const ApiError = require("../../utils/ApiError.js");
const TryCatch = require("../../utils/TryCatch.js");

const userModel = require("../../model/user.model.js");

const addAddress = TryCatch(async (req, res, next) => {
  const { state, city, pincode, phoneNumber, fullAddress } = req.body;

  console.log(req.body);
  const { _id } = req.user;

  // Validate required fields
  if (!state || !city || !pincode || !phoneNumber || !fullAddress) {
    return next(new ApiError(400, "All fields are required."));
  }

  // Find the user
  const user = await userModel.findById(_id);
  if (!user) {
    return next(new ApiError(404, "User not found."));
  }

  // Add new address to the address array
  const newAddress = {
    state,
    city,
    pincode,
    phoneNumber,
    fullAddress,
  };

  user.address.push(newAddress);

  // Save the updated user document
  await user.save();

  const apiResponse = new ApiResponse(
    200,
    "Address added successfully.",
    true,
    user.address
  );

  return res.status(apiResponse.status).json(apiResponse);
});

module.exports = addAddress;
