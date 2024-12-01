const ApiResponse = require("../../utils/ApiResponse.js");
const TryCatch = require("../../utils/TryCatch.js");
const resturantModel = require("../../model/resturant.model.js");

const getResturant = TryCatch(async (req, res, next) => {
  const resturant = await resturantModel.find({});

  const apiresponse = new ApiResponse(
    200,
    "Resturant found successfully",
    true,
    resturant
  );
  return res.status(apiresponse.status).json(apiresponse);
});

module.exports = getResturant;
