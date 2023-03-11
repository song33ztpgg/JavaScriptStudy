const mongoose = require("mongoose");

const goodsSchema = new mongoose.Schema({
  goodsId: {
    //타입 / 필수불가결 여부/ 유일존재 여부
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  thumbnailUrl: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: Number
  }
});
//                                   이름 , 자료값들    
module.exports = mongoose.model("Goods", goodsSchema);
                       

