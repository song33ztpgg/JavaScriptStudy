const http = require("./app.js");
require("./socket.js");

const port = 3001;

http.listen(port, () => {
    console.log(port, "포트로 서버가 열렸어요!");
  }); 


