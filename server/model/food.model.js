const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  toppings: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  resturant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "resturant",
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "Burgers",
      "Fries",
      "Snacks",
      "Salads",
      "Cold drinks",
      "Happy Meal®",
      "Desserts",
      "Hot drinks",
      "Sauces",
      "Orbit®",
    ],
  },
  items: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("food", foodSchema);
