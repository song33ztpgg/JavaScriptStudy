const mongoose =require("mongoose");

const TodoSchema = new mongoose.Schema({
    value :String, //할일 내용
    doneAt : Date, //할일 완료날짜
    order :Number,  //몇번째 할일인지
});

//데이터를 조회 했을 때 가상의 컬럼을 생성
TodoSchema.virtual("todoId").get(function(){
    return this._id.toHexString();
});
//virtual사용   
//todoId를 toJSON타입으로 변경 할때  보여준다
TodoSchema.set("toJSON",{ virtuals : true});

module.exports = mongoose.model("Todo",TodoSchema);
