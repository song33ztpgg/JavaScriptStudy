const { NaverCafes, NaverUsers } = require('../models');
const { Op } = require('sequelize');

class NaverCafesRepository extends NaverCafes {
  constructor() {
    super();
  }

  getAllNaverCafe = async ({}) => {
    const naverCafes = await NaverCafes.findAll({
      include: [NaverUsers],
    });

    return naverCafes;
  };

  findNaverCafe = async ({ cafeUrl, cafeName }) => {
    const naverCafe = await NaverCafes.findOne({
      where: {
        [Op.or]: [{ cafeUrl }, { cafeName }],
      },
    });

    return naverCafe;
  };

  createNaverCafe = async ({
    userId,
    cafeUrl,
    cafeName,
    cafeLogo,
    cafeDescription,
  }) => {
    const naverCafe = await NaverCafes.create({
      userId,
      cafeUrl,
      cafeName,
      cafeLogo,
      cafeDescription,
    });

    return naverCafe;
  };
}

module.exports = NaverCafesRepository;
