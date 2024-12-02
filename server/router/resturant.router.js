const express = require("express");
const router = express.Router();

//controllers
const getResturant = require("../controller/resturant/getResturant.js");
const resturantById = require("../controller/resturant/resturantById.js");
const getSimilarResturant = require("../controller/resturant/getSimilarResturant.js");

//routes
router.get("/get/resturants", getResturant);
router.get("/resturant/:id", resturantById);
router.get("/resturant/similar/:id", getSimilarResturant);

module.exports = router;
