const express = require("express");

const db = require("./models/index.js");
const todosRouter = require("./routes/todos.router.js");

const app = express();
//api 들어올때 express.json() 실행시키고 router 로간다
//express.json() body들어온 데이터(put,del) 사용하기 위한 미들웨어
app.use("/api", express.json(), todosRouter);

//assets 파일을 서빙,이용 할 수 있도록 하는 미들웨어
// .static 아무런 가공 없이 전달
app.use(express.static("./assets"));

app.listen(8080, () => {
  console.log("서버가 켜졌어요!");
});