const express = require('express');
const goodsRouter = require('./routes/goods.js');
const cartsRouter = require('./routes/carts.js');
const usersRouter = require('./routes/users.js');
const authRouter = require('./routes/auth.js');
const connect = require('./schemas');

const app = express();
const port = 3000;

const cookieParser = require('cookie-parser');
connect();

app.use(express.json());

// urlencoded :브라우져 접속 했을때 폼데이터 받을수 있도록
app.use(express.urlencoded({ extended: false }));
//파서는 문자열로 나옴 그래서 분리를 시키는
app.use(cookieParser());
app.use(express.static('assets'));
app.use('/api', [goodsRouter, cartsRouter, usersRouter, authRouter]);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});
