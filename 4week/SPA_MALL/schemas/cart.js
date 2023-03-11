const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId : {
    //object이기 때문에 문자열
    type: String,
    required: true,
  },
  goodsId: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("Cart", cartSchema);