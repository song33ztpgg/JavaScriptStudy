const express = require("express");
const { Users, UserInfos } = require("../models");
const router = express.Router();
const jwt = require("jsonwebtoken")

// 회원가입
router.post("/users", async (req, res) => {
  const { email, password, name, age, gender, profileImage } = req.body;
  const isExistUser = await Users.findOne({ where: { email } });

  console.log("회원가입");
  console.log("isExistUser = " + isExistUser);

  if (isExistUser) {
    return res.status(409).json({ message: "이미 존재하는 이메일입니다." });
  }

  // Users 테이블에 사용자를 추가합니다.
  const user = await Users.create({ email, password });
  console.log();
  console.log("user = " + user);
  // UserInfos 테이블에 사용자 정보를 추가합니다.

  

  const userInfo = await UserInfos.create({
    UserId: user.userId, // 생성한 유저의 userId를 바탕으로 사용자 정보를 생성합니다.
    name,
    age,
    gender: gender.toUpperCase(), // 성별을 대문자로 변환합니다.
    profileImage
  });

  console.log();
  console.log("userInfo = " + userInfo);

  return res.status(201).json({ message: "회원가입이 완료되었습니다." });
});


// 로그인
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "존재하지 않는 이메일입니다." });
    } else if (user.password !== password) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }
  
    //jwt 생성
    const token = jwt.sign({
      userId: user.userId
    }, "customized_secret_key");

    //쿠키발급
    res.cookie("authorization", `Bearer ${token}`);

    return res.status(200).json({ message: "로그인 성공" });
  });


// 사용자 조회
router.get("/users/:userId", async (req, res) => {
    const { userId } = req.params;
  

    //사용자 테이블과 사용자 정보 테이블에 있는 데이터를 가져온다
    const user = await Users.findOne({
      attributes: ["userId", "email", "createdAt", "updatedAt"], //가져올자료
      include: [
        {
          model: UserInfos,  // 1:1 관계를 맺고있는 UserInfos 테이블을 조회합니다.
          attributes: ["name", "age", "gender", "profileImage"],
        }
      ],
      where: { userId }
    });
  
    return res.status(200).json({ data: user });
  });
module.exports = router;