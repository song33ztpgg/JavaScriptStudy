const NaverCafeCommentsService = require('../services/naver-cafe-comments.service');
const { InvalidParamsError } = require('../exceptions/index.exception');

class NaverCafeCommentsController {
  constructor() {
    this.naverCafeCommentsService = new NaverCafeCommentsService();
  }

  /**
   * @param {import("express").Request} req - express Request
   * @param {import("express").Response} res - express Response
   * @param {import("express").NextFunction} next - express Response
   * **/
  getAllNaverCafeComment = async (req, res, next) => {
    try {
      const naverCafeComments =
        await this.naverCafeCommentsService.getAllNaverCafeComment({});

      res.json({ result: naverCafeComments });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @param {import("express").Request} req - express Request
   * @param {import("express").Response} res - express Response
   * @param {import("express").NextFunction} next - express Response
   * **/
  createNaverCafeComment = async (req, res, next) => {
    try {
      const { cafePostId, cafeUserId, comment } = req.body;

      if (!cafePostId || !cafeUserId || !comment) {
        throw new InvalidParamsError();
      }

      const naverCafeComment =
        await this.naverCafeCommentsService.createNaverCafeComment({
          cafePostId,
          cafeUserId,
          comment,
        });

      res.json({ result: naverCafeComment });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = NaverCafeCommentsController;
