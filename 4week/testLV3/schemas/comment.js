const mongoose = require("mongoose");
const postSchema = require("./post");

const commentSchema = new mongoose.Schema({
    postId: {
        type: String,
    },
    nickname: {
        type: String,
    },
    comment: {
        type: String,
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
commentSchema.virtual("commentId").get(function(){
    return this._id.toHexString();
  });
  
  //toJSON 가공할때 
  commentSchema.set("toJSON",{
    //userId를 출력시켜준다
    virtuals:true, 
  });

module.exports = mongoose.model("Comments", commentSchema);