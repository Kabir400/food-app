const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError.js");
const TryCatch = require("../utils/TryCatch.js");
const userModel = require("../model/user.model.js");

const checkLogin = TryCatch(async (req, res, next) => {
  const { Token } = req.cookies;

  if (!Token) {
    return next(new ApiError(401, "Authentication required. Please log in."));
  }

  let decoded;
  try {
    decoded = jwt.verify(Token, process.env.TOKEN_SECRET_KEY);
  } catch (err) {
    return next(
      new ApiError(401, "Invalid or expired token. Please log in again.")
    );
  }

  const user = await userModel.findById(decoded._id).select("-password");

  if (!user) {
    return next(new ApiError(404, "User not found. Please log in again."));
  }

  req.user = user;

  next();
});

module.exports = checkLogin;
