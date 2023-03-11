const jwt = require("jsonwebtoken");
const { Users } = require("../models");

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.cookies;
    const [tokenType, token] = authorization.split(" "); 
    // tokenType : Bearer, token :${token}으로 만든다
    if (tokenType !== "Bearer") {
      return res.status(401).json({ message: "토큰 타입이 일치하지 않습니다." });
    }

                            // token :${token}
    const decodedToken = jwt.verify(token, "customized_secret_key");
      
    
    /*jwt 생성
      const token = jwt.sign({
        userId: user.userId
      }, "customized_secret_key");*/ 

      //jwt내부에 user.userId를 저장했기때문에 불러올수 있다
    const userId = decodedToken.userId;

    //몽고db와 다른 유일한 코드  
    const user = await Users.findOne({ where: { userId } });

    if (!user) {
      res.clearCookie("authorization");
      return res.status(401).json({ message: "토큰 사용자가 존재하지 않습니다." });
    }
    res.locals.user = user;

    next();
  } catch (error) {
    res.clearCookie("authorization");
    return res.status(401).json({
      message: "비정상적인 요청입니다."
    });
  }
}