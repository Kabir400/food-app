const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating can't be larger than 5"],
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  resturant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "resturant",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("review", reviewSchema);
