const express = require("express");
const { Users, UserInfos } = require("../models");
const router = express.Router();
const jwt = require("jsonwebtoken")

// 회원가입
router.post("/users", async (req, res) => {
  const { nickname, password, confirm } = req.body;
  const isExistUser = await Users.findOne({ where: { nickname } });

  console.log("회원가입");
  console.log("isExistUser = " + isExistUser);

  if (isExistUser) {
    return res.status(409).json({ message: "이미 존재하는 닉네임입니다." });
  }

  // Users 테이블에 사용자를 추가합니다.
  const user = await Users.create({ nickname, password });
  console.log();
  console.log("user = " + user);

  const userInfo = ({
    UserId: user.userId, // 생성한 유저의 userId를 바탕으로 사용자 정보를 생성합니다.
    nickname
  });

  console.log();
  console.log("userInfo = " + userInfo);

  return res.status(201).json({ message: "회원가입이 완료되었습니다." });
});


// 로그인
router.post("/login", async (req, res) => {
    const { nickname, password } = req.body;
    const user = await Users.findOne({ where: { nickname } });

    if (!user) {
      return res.status(401).json({ message: "존재하지 않는 닉네임입니다." });
    } else if (user.password != password) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }

    //jwt 생성
    const token = jwt.sign({
      userId: user.userId
    }, "secret_key");

    //쿠키발급
    res.cookie("authorization", `Bearer ${token}`);

    return res.status(200).json({ message: "로그인 성공" });
  });

module.exports = router;