const NaverCafeUsersService = require('../services/naver-cafe-users.service');
const { InvalidParamsError } = require('../exceptions/index.exception');

class NaverCafeUsersController {
  constructor() {
    this.naverCafeUsersService = new NaverCafeUsersService();
  }

  /**
   * @param {import("express").Request} req - express Request
   * @param {import("express").Response} res - express Response
   * @param {import("express").NextFunction} next - express Response
   * **/
  getAllNaverCafeUser = async (req, res, next) => {
    try {
      const naverCafeUsers =
        await this.naverCafeUsersService.getAllNaverCafeUser({});

      res.json({ result: naverCafeUsers });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @param {import("express").Request} req - express Request
   * @param {import("express").Response} res - express Response
   * @param {import("express").NextFunction} next - express Response
   * **/
  createNaverCafeUser = async (req, res, next) => {
    try {
      const { cafeId, userId, nickname, description } = req.body;

      if (!cafeId || !userId || !nickname) {
        throw new InvalidParamsError();
      }

      const naverCafeUser =
        await this.naverCafeUsersService.createNaverCafeUser({
          cafeId,
          userId,
          nickname,
          description,
        });

      res.json({ result: naverCafeUser });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = NaverCafeUsersController;
