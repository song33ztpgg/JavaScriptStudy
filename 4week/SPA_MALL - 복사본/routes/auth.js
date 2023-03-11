const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../schemas/user");

//★로그인 구현
router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log("몽고db에서 email을 이용해 가져온값입니다");
  console.log(user);

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
    "custom-secret-key"
  );
  console.log("jwt 방식의 토큰 값입니다");
  console.log(token);

  //                         bearer타입으로 토큰 전달
  res.cookie("Authorization", `Bearer ${token}`); 
   // JWT를 Body로 할당합니다!
  res.status(200).json({ token });
});

module.exports = router;

