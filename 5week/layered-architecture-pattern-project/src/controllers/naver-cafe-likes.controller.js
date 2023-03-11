const NaverCafeLikesService = require('../services/naver-cafe-likes.service');
const { InvalidParamsError } = require('../exceptions/index.exception');

class NaverCafeLikesController {
  constructor() {
    this.naverCafeLikesService = new NaverCafeLikesService();
  }

  getAllNaverCafeLike = async (req, res, next) => {
    try {
      const naverCafeLikes =
        await this.naverCafeLikesService.getAllNaverCafeLike({});

      res.json({ result: naverCafeLikes });
    } catch (error) {
      next(error);
    }
  };

  createNaverCafeLike = async (req, res, next) => {
    try {
      const { cafeUserId, cafePostId } = req.body;

      if (!cafeUserId || !cafePostId) {
        throw new InvalidParamsError();
      }

      const naverCafeLike =
        await this.naverCafeLikesService.createNaverCafeLike({
          cafeUserId,
          cafePostId,
        });

      res.json({ result: naverCafeLike });
    } catch (error) {
      next(error);
    }
  };

  deleteNaverCafeLike = async (req, res, next) => {
    try {
      const { cafeUserId, cafePostId } = req.body;

      if (!cafeUserId || !cafePostId) {
        throw new InvalidParamsError();
      }

      const naverCafeLike =
        await this.naverCafeLikesService.deleteNaverCafeLike({
          cafeUserId,
          cafePostId,
        });

      res.json({ result: naverCafeLike });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = NaverCafeLikesController;
