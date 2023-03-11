const express = require('express');
const router = express.Router();
const User = require('../schemas/user');
const authMiddleware = require('../middlewares/auth-middleware');

// ★ 내 정보 조회 API
// /users/me접속을 하면 authMiddleware 미들웨어 실행
router.get('/users/me', authMiddleware, async (req, res) => {
  const { email, nickname } = res.locals.user;

  console.log('접속은 하였습니다');
  res.status(200).json({
    user: { email, nickname },
  });
});

// ★회원가입 API
router.post('/users', async (req, res) => {
  //post형식인 이유
  //보안 : GET 메서드는 데이터를 URL에 표현해야 하기 때문에 보안에 취약
  //REST API 관점 : 인증 정보를 "생성"해서 받아온다 보면 POST 메서드가 적합
  const { email, nickname, password, confirmPassword } = req.body;

  //패스워드 확인
  if (password !== confirmPassword) {
    res.status(400).json({
      errorMessage: '패스워드가 패스워드 확인란과 다릅니다.',
    });
    return;
  }

  const existsUsers = await User.findOne({
    //몽고db쪽에서 2개중 하나라도 존재하나 찾으면
    $or: [{ email }, { nickname }],
  });
  if (existsUsers) {
    //이메일과 비밀번호중 보안을 위해 무엇이 틀렸는지 전달하지 않는다
    res.status(400).json({
      errorMessage: '이메일 또는 닉네임이 이미 사용중입니다.',
    });
    return;
  }

  const user = new User({ email, nickname, password });
  await user.save();

  res.status(201).json({});
});

module.exports = router;
