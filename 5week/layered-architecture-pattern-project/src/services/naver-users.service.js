const NaverUsersRepository = require('../repositories/naver-users.repository');
const { ValidationError } = require('../exceptions/index.exception');

const genderType = {
  MAN: 1,
  WOMAN: 2,
};

class NaverUsersService {
  constructor() {
    this.naverUsersRepository = new NaverUsersRepository();
  }

  getAllNaverUser = async ({}) => {
    const naverUsers = await this.naverUsersRepository.getAllNaverUser({});

    return naverUsers;
  };

  getNaverUserByPk = async ({ userId }) => {
    const naverUser = await this.naverUsersRepository.getNaverUserByPk({
      userId,
    });

    return naverUser;
  };

  findNaverUser = async ({ id, nickname }) => {
    const naverUser = await this.naverUsersRepository.findNaverUser({
      id,
      nickname,
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
    const isExistNaverUser = await this.findNaverUser({ id, nickname });

    if (isExistNaverUser) {
      if (isExistNaverUser.id === id)
        throw new ValidationError(
          '동일한 ID를 가진 Naver User가 이미 존재합니다.'
        );
      else if (isExistNaverUser.nickname === nickname)
        throw new ValidationError(
          '동일한 Nickname을 가진 Naver User가 이미 존재합니다.'
        );
    }

    const naverUser = await this.naverUsersRepository.createNaverUser({
      id,
      password,
      nickname,
      profileImage,
      gender: genderType[gender.toUpperCase()],
    });

    return naverUser;
  };
}

module.exports = NaverUsersService;
