const NaverCafeCommentsRepository = require('../repositories/naver-cafe-comments.repository');

class NaverCafeCommentsService {
  constructor() {
    this.naverCafeCommentsRepository = new NaverCafeCommentsRepository();
  }

  getAllNaverCafeComment = async (req, res, next) => {
    const naverCafeComments =
      await this.naverCafeCommentsRepository.getAllNaverCafeComment({});

    return naverCafeComments;
  };

  createNaverCafeComment = async ({ cafePostId, cafeUserId, comment }) => {
    const naverCafeComment =
      await this.naverCafeCommentsRepository.createNaverCafeComment({
        cafePostId,
        cafeUserId,
        comment,
      });

    return naverCafeComment;
  };
}

module.exports = NaverCafeCommentsService;
