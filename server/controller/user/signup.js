const ApiResponse = require("../../utils/ApiResponse.js");
const ApiError = require("../../utils/ApiError.js");
const TryCatch = require("../../utils/TryCatch.js");

const userModel = require("../../model/user.model.js");

const signup = TryCatch(async (req, res, next) => {
  const { email, name, phone, password } = req.body;

  if (!email || !phone || !name || !password) {
    return next(new ApiError(400, "All fields are required"));
  }

  const isExist = await userModel.findOne({ email });
  if (isExist) {
    return next(new ApiError(400, "User already exists"));
  }

  const user = await userModel.create({ email, name, password });

  user.password = undefined;

  const apiresponse = new ApiResponse(
    200,
    "User created successfully",
    true,
    user
  );
  return res.status(apiresponse.status).json(apiresponse);
});

module.exports = signup;
