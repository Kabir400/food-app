const express = require("express");
const router = express.Router();

//controllers
const getResturant = require("../controller/resturant/getResturant.js");

//routes
router.get("/get/resturants", getResturant);

module.exports = router;
