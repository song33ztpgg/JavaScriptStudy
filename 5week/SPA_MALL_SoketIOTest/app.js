const express = require("express");
const cookieParser = require("cookie-parser");
const goodsRouter = require("./routes/goods.js");
const usersRouter = require("./routes/users.js");
const authRouter = require("./routes/auth.js");
const connect = require("./schemas");
const socketIo = require("socket.io");
const {Server} = require("http")

const app = express();
const http = Server(app);
const io =socketIo(http);

const port = 3000;
connect(); // mongoose를 연결합니다.

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("assets"));
app.use("/api", [goodsRouter, usersRouter, authRouter]);



app.get("/", (req, res) => {
  res.send("Hello World!");
});

http.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
;