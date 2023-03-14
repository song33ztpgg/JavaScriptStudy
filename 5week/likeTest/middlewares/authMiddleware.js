const jwt = require('jsonwebtoken');
const { Users } = require('../models');

// 유저 인증에 실패하면 403 상태 코드를 반환한다.
module.exports = async (req, res, next) => {
  try {
    const cookies = req.cookies['middleProjectCookie'];
    if (!cookies) {
      return res.status(403).send({
        errorMessage: '로그인이 필요한 기능입니다.',
      });
    }

    const [tokenType, tokenValue] = cookies.split(' ');
    if (tokenType !== 'Bearer') {
      res.clearCookie('middleProjectCookie'); // 인증에 실패하였을 경우 Cookie를 삭제합니다.
      return res.status(403).send({
        errorMessage: '전달된 쿠키에서 오류가 발생하였습니다.',
      });
    }

    const { userId } = jwt.verify(tokenValue, 'Secret Key'); // 4번 답 일치해야 함
    const user = await Users.findByPk(userId);

    res.locals.user = user;
    next();
  } catch (error) {
    res.clearCookie('middleProjectCookie'); // 인증에 실패하였을 경우 Cookie를 삭제합니다.
    console.error(error);
    return res.status(403).send({
      errorMessage: '로그인이 필요한 기능입니다.',
    });
  }
};
