const { NaverUsers } = require('../models');
const { Op } = require('sequelize');

class NaverUsersRepository {
  constructor() {
    this.NaverUsers = NaverUsers;
  }

  getAllNaverUser = async ({}) => {
    const naverUsers = await this.NaverUsers.findAll();

    return naverUsers;
  };

  getNaverUserByPk = async ({ userId }) => {
    const naverUser = await this.NaverUsers.findByPk(userId);

    return naverUser;
  };

  findNaverUser = async ({ id, nickname }) => {
    const naverUser = await this.NaverUsers.findOne({
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
    const naverUser = await this.NaverUsers.create({
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
