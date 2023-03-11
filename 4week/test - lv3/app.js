const express = require("express");
const connect = require("./schemas");
const postsRouter = require("./routes/posts.js");
const authRouter = require("./routes/auth.js");

//1. 서버 열기
const app = express();
connect();
//2.쿠키관리하기 
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//3.
app.use(express.json());
app.use("/api",[postsRouter,authRouter]);

app.listen(8000, () => {
  console.log("서버가 켜졌어요!");
});