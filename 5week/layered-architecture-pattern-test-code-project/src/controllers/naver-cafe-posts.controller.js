const NaverCafePostsService = require('../services/naver-cafe-posts.service');
const { InvalidParamsError } = require('../exceptions/index.exception');

class NaverCafePostsController {
  constructor() {
    this.naverCafePostsService = new NaverCafePostsService();
  }

  /**
   * @param {import("express").Request} req - express Request
   * @param {import("express").Response} res - express Response
   * @param {import("express").NextFunction} next - express Response
   * **/
  getAllNaverCafePost = async (req, res, next) => {
    try {
      const naverCafePosts =
        await this.naverCafePostsService.getAllNaverCafePost({});

      res.json({ result: naverCafePosts });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @param {import("express").Request} req - express Request
   * @param {import("express").Response} res - express Response
   * @param {import("express").NextFunction} next - express Response
   * **/
  createNaverCafePost = async (req, res, next) => {
    try {
      const { cafeCategoryId, cafeUserId, title, content } = req.body;

      if (!cafeCategoryId || !cafeUserId || !title || !content) {
        throw new InvalidParamsError();
      }

      const naverCafePost =
        await this.naverCafePostsService.createNaverCafePost({
          cafeCategoryId,
          cafeUserId,
          title,
          content,
        });

      res.json({ result: naverCafePost });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = NaverCafePostsController;
