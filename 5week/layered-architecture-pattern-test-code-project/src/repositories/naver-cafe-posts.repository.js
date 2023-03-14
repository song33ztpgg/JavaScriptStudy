const {
  NaverCafePosts,
  NaverCafeUsers,
  NaverCafeCategories,
} = require('../models');

class NaverCafePostsRepository {
  getAllNaverCafePost = async () => {
    const naverCafePosts = await NaverCafePosts.findAll({
      include: [NaverCafeUsers, NaverCafeCategories],
    });

    return naverCafePosts;
  };

  createNaverCafePost = async ({
    cafeCategoryId,
    cafeUserId,
    title,
    content,
  }) => {
    const naverCafePost = await NaverCafePosts.create({
      cafeCategoryId,
      cafeUserId,
      title,
      content,
    });

    return naverCafePost;
  };
}

module.exports = NaverCafePostsRepository;
