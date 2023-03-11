const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  goodsId: {
    //타입 / 필수불가결 여부/ 유일존재 여부
    type: Number,
    required: true,
    unique: true
  },
  quantity: {
    type: Number,
    require : true,
  }
});
//                                   이름 , 자료값들    
module.exports = mongoose.model("Cart", cartSchema);
                       

