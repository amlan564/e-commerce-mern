const mongoose = require("mongoose");

const ProductReviewSchema = new mongoose.Schema(
  {
    productId: String,
    userId: String,
    userName: String,
    reviewMessage: String,
    rating: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductReview", ProductReviewSchema);