const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  items: [
    {
      food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "food",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  expiresAt: {
    type: Date,
    required: true,
    default: () => new Date(Date.now() + 24 * 60 * 60 * 1000 * 5), //5 days
  },
});

// TTL index for automatic expiration
sharedCartSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model("cart", cartSchema);
