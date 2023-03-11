const express = require("express");
const app = express();
const port = 3000;

                    //자료를 가져온다 (파일위치)
const goodsRouter = require("./routes/goods.js");
const cartsRouter = require("./routes/carts.js");

//index자료를 사용하기에 /index는 생략가능 
const connect = require("./schemas");
connect();



app.use(express.json());

app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl, ' - ', new Date());
  next();
});

//모든 api사용할때 req호출할때 body(= req.body)객체 사용하겠다
app.use("/api",[goodsRouter, cartsRouter]);



app.post("/",(req,res)=> {
  console.log(req.body);
  res.send('기본 URL에 POST 메소드가 정상적으로 실행되었습니다');
})

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});


/*
app.get("/",(req,res)=> {
   //req전달 받은 query정보 출력
  console.log(req.query);

  // res.send('정상적으로 반환되었습니다');
  const obj = {
    "keykey" : "value입니다",
    "이름입니다" : "이름일까요?"
  }
  res.status(300).json(obj);
  //위와 같은 결과를 보여준다
  // res.json = {
  //   "keykey" : "value입니다",
  //   "이름입니다" : "이름일까요?"
  // }
})
*/


/**
 * localhost:3000/:id 중 
 * :id 에 적힌 정보값을 URL로 들어온다
 *  ex) localhost:3000/xyz 
 *  출력) {:id, 'xyz'}
 * */ 
 /*
app.get("/:id",(req,res)=> {
  console.log(req.params);
  res.send(':id URL에 정상적으로 반환되었습니다');
})


app.post("/",(req,res)=> {
  console.log(req.body);
  res.send('기본 URL에 POST 메소드가 정상적으로 실행되었습니다');
})

 app.get('/', (req, res) => {
    res.send('안녕하세요');
  });


//api라는 경로로 들어 왔을 경우 goodsRouter로 이동하라
app.use('/api',goodsRouter);
*/


