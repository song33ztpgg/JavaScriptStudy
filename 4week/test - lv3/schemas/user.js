const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }},{ 
    versionKey: false
  }
  
);

// 가상 값 userId 만든다.가지고 올때 만든다
// function this는 전역 객체를 찾는다(?)
UserSchema.virtual("userId").get(function(){
    return this._id.toHexString();
});

//toJSON 가공할때 
UserSchema.set("toJSON",{
    //userId를 출력시켜준다
    virtuals:true, 
});



module.exports = mongoose.model("User", UserSchema);
