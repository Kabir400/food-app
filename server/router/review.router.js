const express = require("express");
const router = express.Router();

//controllers
const addReview = require("../controller/review/addReview.js");
const getReview = require("../controller/review/getReviews.js");

//middleware
const checkLogin = require("../middleware/checkLogin.js");

//routes
router.post("/add/review", checkLogin, addReview);
router.get("/get/review/:id", getReview);

module.exports = router;
