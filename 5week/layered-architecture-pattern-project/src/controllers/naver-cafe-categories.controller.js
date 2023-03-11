const NaverCafeCategoriesService = require('../services/naver-cafe-categories.service');
const { InvalidParamsError } = require('../exceptions/index.exception');

class NaverCafeCategoriesController {
  constructor() {
    this.naverCafeCategoriesService = new NaverCafeCategoriesService();
  }

  /**
   * @param {import("express").Request} req - express Request
   * @param {import("express").Response} res - express Response
   * @param {import("express").NextFunction} next - express Response
   * **/
  getAllNaverCafeCategory = async (req, res, next) => {
    try {
      const naverCafeCategories =
        await this.naverCafeCategoriesService.getAllNaverCafeCategory({});

      res.json({ result: naverCafeCategories });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @param {import("express").Request} req - express Request
   * @param {import("express").Response} res - express Response
   * @param {import("express").NextFunction} next - express Response
   * **/
  createNaverCafeCategory = async (req, res, next) => {
    try {
      const { cafeId, category } = req.body;

      if (!cafeId || !category) {
        throw new InvalidParamsError();
      }

      const naverCafeCategory =
        await this.naverCafeCategoriesService.createNaverCafeCategory({
          cafeId,
          category,
        });

      res.json({ result: naverCafeCategory });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = NaverCafeCategoriesController;
