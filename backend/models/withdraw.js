const mongoose = require("mongoose");

const withdrawSchema = new mongoose.Schema({
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Shop",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Processing",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt:{
    type: Date,
  }
});

module.exports = mongoose.model("Withdraw", withdrawSchema);