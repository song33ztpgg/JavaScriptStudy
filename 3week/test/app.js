const express = require("express");
const app = express();
const port = 3000;

// const commentRouter = require("./routes/comments.js");
const postRouter = require("./routes/posts.js");
const connect = require("./schemas");
connect();

app.use(express.json());

// //모든 api사용할때 req호출할때 body(= req.body)객체 사용하겠다
app.use("/api",[postRouter]);


app.post("/",(req,res)=> {
  res.send('기본 URL에 POST 메소드가 정상적으로 실행되었습니다');
})

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});


