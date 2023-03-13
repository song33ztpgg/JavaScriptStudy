const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../schemas/user");
const authMiddleware = require("../middlewares/auth-middleware");

//★로그인 구현
router.post("/login", async (req, res) => {
  const { nickname, password } = req.body;

  const user = await User.findOne({ nickname });

  if (!user || password !== user.password) {
    res.status(400).json({
      errorMessage: "로그인 실패.",
    });
    return;
  }

  //토큰 생성
  const token = jwt.sign(
    //{담을 내용, 비밀키 }
    { userId: user.userId },
    "secretKey"
  );
  //                         bearer타입으로 토큰 전달
  res.cookie("Authorization", `Bearer ${token}`); 
   // JWT를 Body로 할당합니다!
  res.status(200).json({ token });
});


// ★회원가입 API
router.post("/singup", async (req, res) => {
    //post형식인 이유 
    //보안 : GET 메서드는 데이터를 URL에 표현해야 하기 때문에 보안에 취약
    //REST API 관점 : 인증 정보를 "생성"해서 받아온다 보면 POST 메서드가 적합
      const {nickname, password, confirm } = req.body;
    
  

      //패스워드 확인
      if (password !== confirm) {
        res.status(400).json({
          errorMessage: "패스워드가 패스워드 확인란과 다릅니다.",
        });
        return;
      }
    
      const existsUsers = await User.findOne({nickname});

      if (existsUsers) {
        //이메일과 비밀번호중 보안을 위해 무엇이 틀렸는지 전달하지 않는다 
        res.status(400).json({
          errorMessage: "  닉네임이 이미 사용중입니다.",
        });
        return;
      }
    
      // const user = new User({  nickname, password ,confirm});
      // await user.save();
      await User.create({ nickname, password});
      console.log("완료");
    
      res.status(201).json({});
    });


    // ★ 내 정보 조회 API
// /users/me접속을 하면 authMiddleware 미들웨어 실행
router.get("/me", authMiddleware, async (req, res) => {
  const user = res.locals.user;
  res.status(200).json(user);
});


module.exports = router;

