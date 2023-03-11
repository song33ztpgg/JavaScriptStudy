const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
/**
 * 서버가 클라이언트의 HTTP 요청(Request)을 수신할 때, 
 * 서버는 응답(Response)과 함께 Set-Cookie 라는 헤더를 함께 전송할 수 있습니다.
 *  그 후 쿠키는 해당 서버에 의해 만들어진 응답(Response)과 함께
 *  Cookie HTTP 헤더안에 포함되어 전달받습니다.
 */


// app.get("/set-cookie", (req, res) => {
//     let expire = new Date();
//     expire.setMinutes(expire.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.

//     //해더에 정보를 저장할것 
//     res.writeHead(200, {
//     //set-cookie : 나는 쿠키를 전달 할 것이다 브라우저에게 
//     //키 : name , value : sparta
//       'Set-Cookie': `name=sparta; Expires=${expire.toGMTString()}; HttpOnly; Path=/`,
//     });
//     return res.status(200).end();
//   });


//쿠키 할당하기
app.get("/set-cookie", (req, res) => {
    let expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.

    //키 : name , value : sparta
    res.cookie('name', 'sparta', {
        expires: expires
    });
    return res.status(200).end();
});

// req를 이용하여 쿠키 접근하기
app.get("/get-cookie", (req, res) => {
    // //해더의 쿠키를 받아온다
    // const cookie = req.headers.cookie;

    //cookieparser 미들웨어를 적용 했음
    const cookies = req.cookies;
    console.log(cookies); // name=sparta
    return res.status(200).json({ cookies });
  });

//사용자의 정보를 저장할 만한 자물쇠(데이터 저장 부분) 
//객체로 저장 key - value()
let session = {}; 
app.get('/set-session',(req, res) => {
const name ="spart";   //세션에 저장할 데이터
const uniqueInt = Date.now(); //클라이언트에게 할당한 열쇠
session[uniqueInt] = name; //세션에 데이터 저장
//uniqueInt : 실제 클라이언트가 사용할 수 있는 키값
res.cookie("sessionKey", uniqueInt); 
res.status(200).end();
});

app.get('/get-session',(req, res) => {
    //쿠키에서 세션값을 받는다
    const {sessionKey} = req.cookies; 
    const sessionItem = session[sessionKey];

    console.log(sessionItem);  
    return res.status(200).json({sessionItem : sessionItem});
});

app.listen(5002, () => {
    console.log(5002, "프로트 서버가 실행되었습니다");
});