const mongoose = require("mongoose");

const connect = () => {
  mongoose
    //몽고db를 통해서 연결/ 포트27017로연결 / 실제 데이터베이스 이름
    // .connect("mongodb://localhost:27017/spa_mall")
    .connect("mongodb://127.0.0.1:27017/spa_mall2")
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;