const { NaverCafeLikes, NaverCafeUsers, NaverCafePosts } = require('../models');
const { Op } = require('sequelize');

class NaverCafeLikesRepository extends NaverCafeLikes {
  constructor() {
    super();
  }

  getAllNaverCafeLike = async ({}) => {
    const naverCafeLikes = await NaverCafeLikes.findAll({
      include: [NaverCafeUsers, NaverCafePosts],
    });

    return naverCafeLikes;
  };

  findNaverCafeLike = async ({ cafeUserId, cafePostId }) => {
    const naverCafeLike = await NaverCafeLikes.findOne({
      where: {
        [Op.and]: [{ cafeUserId }, { cafePostId }],
      },
    });

    return naverCafeLike;
  };

  createNaverCafeLike = async ({ cafeUserId, cafePostId }) => {
    const naverCafeLike = await NaverCafeLikes.create({
      cafeUserId,
      cafePostId,
    });

    return naverCafeLike;
  };

  deleteNaverCafeLike = async ({ cafeUserId, cafePostId }) => {
    const naverCafeLike = await NaverCafeLikes.destroy({
      where: {
        [Op.and]: [{ cafeUserId }, { cafePostId }],
      },
    });

    return naverCafeLike;
  };
}

module.exports = NaverCafeLikesRepository;
