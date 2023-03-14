const {
  NaverCafeComments,
  NaverCafeUsers,
  NaverCafePosts,
} = require('../models');

class NaverCafeCommentsRepository {
  getAllNaverCafeComment = async ({}) => {
    const naverCafeComments = await NaverCafeComments.findAll({
      include: [NaverCafeUsers, NaverCafePosts],
    });

    return naverCafeComments;
  };

  createNaverCafeComment = async ({ cafePostId, cafeUserId, comment }) => {
    const naverCafeComment = await NaverCafeComments.create({
      cafePostId,
      cafeUserId,
      comment,
    });

    return naverCafeComment;
  };
}

module.exports = NaverCafeCommentsRepository;
