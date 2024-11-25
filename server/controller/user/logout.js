const TryCatch = require("../../utils/TryCatch.js");
const ApiResponse = require("../../utils/ApiResponse.js");

const logout = TryCatch(async (req, res, next) => {
  res.clearCookie("Token", {
    path: "/",
    sameSite: "None",
    secure: true,
  });

  res.status(200).json(new ApiResponse(200, "successfully logout"));
});

module.exports = logout;
