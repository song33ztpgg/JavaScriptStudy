const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
  // userId: {
  //   type: String,
  // },
  // postId: {
  //   type: String,
  // },
  nickname: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creatDay: {
    type: String,
  },
  updateDay: {
    type: String
  }
}, {
  versionKey: false
}
);
postSchema.virtual("userId").get(function(){
  return this._id.toHexString();
});
postSchema.virtual("postId").get(function(){
  return ;
});

//toJSON 가공할때 
postSchema.set("toJSON",{
  //userId를 출력시켜준다
  virtuals:true, 
});
//posts소문자로 생성된다 몽고db로
module.exports = mongoose.model("Posts", postSchema);