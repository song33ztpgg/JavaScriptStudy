const { NaverUsers } = require('../models');
const { Op } = require('sequelize');

class NaverUsersRepository {
  constructor() {}

  getAllNaverUser = async ({}) => {
    const naverUsers = await NaverUsers.findAll();

    return naverUsers;
  };

  getNaverUserByPk = async ({ userId }) => {
    const naverUser = await NaverUsers.findByPk(userId);

    return naverUser;
  };

  findNaverUser = async ({ id, nickname }) => {
    const naverUser = await NaverUsers.findOne({
      where: {
        [Op.or]: [{ id }, { nickname }],
      },
    });

    return naverUser;
  };

  createNaverUser = async ({
    id,
    password,
    nickname,
    profileImage,
    gender,
  }) => {
    const naverUser = await NaverUsers.create({
      id,
      password,
      nickname,
      profileImage,
      gender,
    });

    return naverUser;
  };
}

module.exports = NaverUsersRepository;
