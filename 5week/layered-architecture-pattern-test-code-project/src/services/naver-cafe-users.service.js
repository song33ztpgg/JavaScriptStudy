const NaverCafeUsersRepository = require('../repositories/naver-cafe-users.repository');
const { ValidationError } = require('../exceptions/index.exception');

class NaverCafeUsersService {
  constructor() {
    this.naverCafeUsersRepository = new NaverCafeUsersRepository();
  }

  getAllNaverCafeUser = async ({}) => {
    const naverCafeUsers =
      await this.naverCafeUsersRepository.getAllNaverCafeUser({});

    return naverCafeUsers;
  };

  createNaverCafeUser = async ({ cafeId, userId, nickname, description }) => {
    const isExistNaverCafeUser =
      await this.naverCafeUsersRepository.findNaverCafeUser({
        cafeId,
        userId,
        nickname,
      });
    if (isExistNaverCafeUser) {
      if (
        isExistNaverCafeUser.cafeId === cafeId &&
        isExistNaverCafeUser.userId === userId
      )
        throw new ValidationError(`해당 카페에 이미 가입한 상태입니다.`);
      else if (isExistNaverCafeUser.nickname === nickname)
        throw new ValidationError(
          `카페에 ${nickname} 닉네임이 이미 사용중입니다.`
        );
    }

    const naverCafeUser =
      await this.naverCafeUsersRepository.createNaverCafeUser({
        cafeId,
        userId,
        nickname,
        description,
      });

    return naverCafeUser;
  };
}

module.exports = NaverCafeUsersService;
