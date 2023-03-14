const NaverCafePostsRepository = require('../repositories/naver-cafe-posts.repository');

class NaverCafePostsService {
  constructor() {
    this.naverCafePostsRepository = new NaverCafePostsRepository();
  }

  getAllNaverCafePost = async ({}) => {
    const naverCafePosts =
      await this.naverCafePostsRepository.getAllNaverCafePost({});

    return naverCafePosts;
  };

  createNaverCafePost = async ({
    cafeCategoryId,
    cafeUserId,
    title,
    content,
  }) => {
    const naverCafePost =
      await this.naverCafePostsRepository.createNaverCafePost({
        cafeCategoryId,
        cafeUserId,
        title,
        content,
      });

    return naverCafePost;
  };
}

module.exports = NaverCafePostsService;
