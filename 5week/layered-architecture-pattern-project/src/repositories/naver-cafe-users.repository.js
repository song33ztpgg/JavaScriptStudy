const { NaverCafeUsers, NaverCafes, NaverUsers } = require('../models');
const { Op } = require('sequelize');

class NaverCafeUsersRepository extends NaverCafeUsers {
  constructor() {
    super();
  }

  getAllNaverCafeUser = async ({}) => {
    const naverCafeUsers = await NaverCafeUsers.findAll({
      include: [NaverCafes, NaverUsers],
    });

    return naverCafeUsers;
  };

  findNaverCafeUser = async ({ cafeId, userId, nickname }) => {
    const naverCafeUser = await NaverCafeUsers.findOne({
      where: {
        [Op.or]: [
          {
            [Op.and]: [{ cafeId }, { userId }],
          },
          { nickname },
        ],
      },
    });

    return naverCafeUser;
  };

  createNaverCafeUser = async ({ cafeId, userId, nickname, description }) => {
    const naverCafeUser = await NaverCafeUsers.create({
      cafeId,
      userId,
      nickname,
      description,
      isCafeUser: true,
    });

    return naverCafeUser;
  };
}

module.exports = NaverCafeUsersRepository;
