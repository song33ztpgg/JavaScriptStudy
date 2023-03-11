const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = 3015;

app.use(express.json()); // body-parser 전역 미들웨어
app.use('/api', routes); // 라우터 등록

app.listen(PORT, () => {
  console.log(PORT, '서버를 실행 중 입니다.');
});
