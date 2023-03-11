// const express = require("express");
// const { createServer } = require("http");

// const app = express();
// const http = createServer(app);
// const io = require("socket.io")(http, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },  
// });

const io = require("socket.io")(3000, {
  cors: {
    origin: "*",  // * : 사용자 모두에게 허용
    methods: ["GET", "POST"], //get과 post메소드만 허용 
  },
});


//소캣이 열렸을때
io.on("connection", (socket) => {
  console.log("새로운 소켓이 연결됐어요!");

  //(전달할 위치, 전달할 값)
  socket.emit("customEventName", "this is custom event data");

  //서버에 message를 보냈을 때
  socket.on("message", (data) => {
    console.log(data);
  });
});
  