const TryCatch = require("../../utils/TryCatch.js");
const ApiError = require("../../utils/ApiError.js");
const ApiResponse = require("../../utils/ApiResponse.js");
const userModel = require("../../model/user.model.js");
const jwt = require("jsonwebtoken");

const checkLogin = TryCatch(async (req, res, next) => {
  const { Token } = req.cookies;

  if (!Token) {
    return next(new ApiError(401, "You are not logged in"));
  }

  let decoded;
  try {
    decoded = jwt.verify(Token, process.env.TOKEN_SECRET_KEY);
  } catch (error) {
    return next(new ApiError(401, "Invalid or expired token"));
  }

  const user = await userModel.findById(decoded._id).select("-password");
  if (!user) {
    return next(new ApiError(401, "User not found"));
  }

  const apiresponse = new ApiResponse(
    200,
    "User found successfully",
    true,
    user
  );

  res.status(apiresponse.status).json(apiresponse);
});

module.exports = checkLogin;
