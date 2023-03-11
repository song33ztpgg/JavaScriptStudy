const NaverCafesService = require('../services/naver-cafes.service');
const { InvalidParamsError } = require('../exceptions/index.exception');

class NaverCafesController {
  constructor() {
    this.naverCafesService = new NaverCafesService();
  }

  /**
   * @param {import("express").Request} req - express Request
   * @param {import("express").Response} res - express Response
   * @param {import("express").NextFunction} next - express Response
   * **/
  getAllNaverCafe = async (req, res, next) => {
    try {
      const naverCafes = await this.naverCafesService.getAllNaverCafe({});

      res.json({ result: naverCafes });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @param {import("express").Request} req - express Request
   * @param {import("express").Response} res - express Response
   * @param {import("express").NextFunction} next - express Response
   * **/
  createNaverCafe = async (req, res, next) => {
    try {
      const { userId, cafeUrl, cafeName, cafeLogo, cafeDescription } = req.body;

      if (!userId || !cafeUrl || !cafeName) {
        throw new InvalidParamsError();
      }

      const naverCafe = await this.naverCafesService.createNaverCafe({
        userId,
        cafeUrl,
        cafeName,
        cafeLogo,
        cafeDescription,
      });

      res.json({ result: naverCafe });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = NaverCafesController;
