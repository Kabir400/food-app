const mongoose = require("mongoose");

const resturantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    max: [5, "Rating can't be more than 5"],
    default: 0,
  },
  noOfReviews: {
    type: Number,
    default: 0,
  },
  location: {
    latetude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("resturant", resturantSchema);
