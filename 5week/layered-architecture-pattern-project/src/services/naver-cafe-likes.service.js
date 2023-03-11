const NaverCafeLikesRepository = require('../repositories/naver-cafe-likes.repository');
const { ValidationError } = require('../exceptions/index.exception');

class NaverCafeLikesService {
  constructor() {
    this.naverCafeLikesRepository = new NaverCafeLikesRepository();
  }

  getAllNaverCafeLike = async ({}) => {
    const naverCafeLikes =
      await this.naverCafeLikesRepository.getAllNaverCafeLike({});

    return naverCafeLikes;
  };

  createNaverCafeLike = async ({ cafeUserId, cafePostId }) => {
    const isExistNaverCafeLike =
      await this.naverCafeLikesRepository.findNaverCafeLike({
        cafeUserId,
        cafePostId,
      });

    if (isExistNaverCafeLike) {
      throw new ValidationError('이미 좋아요 등록된 게시글입니다.');
    }

    const naverCafeLike =
      await this.naverCafeLikesRepository.createNaverCafeLike({
        cafeUserId,
        cafePostId,
      });

    return naverCafeLike;
  };

  deleteNaverCafeLike = async ({ cafeUserId, cafePostId }) => {
    const isExistNaverCafeLike =
      await this.naverCafeLikesRepository.findNaverCafeLike({
        cafeUserId,
        cafePostId,
      });

    if (!isExistNaverCafeLike) {
      throw new ValidationError(
        '해당 게시글의 좋아요가 등록되어 있지 않습니다.'
      );
    }

    const naverCafeLike =
      await this.naverCafeLikesRepository.deleteNaverCafeLike({
        cafeUserId,
        cafePostId,
      });

    return naverCafeLike;
  };
}

module.exports = NaverCafeLikesService;
