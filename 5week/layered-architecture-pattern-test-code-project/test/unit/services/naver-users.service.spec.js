const NaverUsersService = require('../../../src/services/naver-users.service');
const { ValidationError } = require('../../../src/exceptions/index.exception');
const {
  createNaverUserResultSchema,
  createNaverUserInsertSchema,
} = require('../../fixtures/naver-users.fixtures');

const mockNaverUsersRepository = {
  getAllNaverUser: jest.fn(),
  createNaverUser: jest.fn(),
  findNaverUser: jest.fn(),
  getNaverUserByPk: jest.fn(),
};

describe('naver-users Service Layer Test', function () {
  beforeEach(() => {
    // restore the spy created with spyOn
    jest.resetAllMocks();
  });

  test('createNaverUser Method의 Success Case', async () => {
    // 새로운 서비스 할당
    let naverUsersService = new NaverUsersService();
    // Repository를 Mocking
    naverUsersService.naverUsersRepository = Object.assign(
      {},
      mockNaverUsersRepository
    );
    // Repository의 createNaverUser Method의 Mock된 결과값을 수정
    naverUsersService.naverUsersRepository.createNaverUser = jest.fn(
      () => createNaverUserResultSchema
    );
    // Service의 findNaverUser를 Mocking
    naverUsersService.findNaverUser = jest.fn();

    const naverUser = await naverUsersService.createNaverUser(
      createNaverUserInsertSchema
    );

    // createNaverUser 메소드를 호출할 때, findNaverUser Services를 호출했는지 검증
    expect(naverUsersService.findNaverUser).toHaveBeenCalledWith({
      id: createNaverUserInsertSchema.id,
      nickname: createNaverUserInsertSchema.nickname,
    });

    // createNaverUser 메소드를 호출할 때, 어떤 값이었는지 검증
    expect(
      naverUsersService.naverUsersRepository.createNaverUser
    ).toHaveBeenCalledWith({
      ...createNaverUserInsertSchema,
      gender: 1,
      profileImage: undefined,
    });

    // createNaverUser 메소드가 몇번 호출되었는지 확인
    expect(
      naverUsersService.naverUsersRepository.createNaverUser
    ).toHaveBeenCalledTimes(1);

    // naverUsersRepository.createNaverUser에서 호출되는 결괏값과 Service의 Return값이 일치한다, 가공되지 않음.
    expect(naverUser).toBe(createNaverUserResultSchema);
  });

  test('createNaverUser Method의 Fail Case By duplicated Id', async () => {
    const validationErrorByDuplicatedIdSchema = {
      id: createNaverUserInsertSchema.id,
      nickname: createNaverUserInsertSchema.nickname,
    };

    // 새로운 서비스 할당
    let naverUsersService = new NaverUsersService();
    // Repository를 Mocking
    naverUsersService.naverUsersRepository = Object.assign(
      {},
      mockNaverUsersRepository
    );
    // Repository의 createNaverUser Method의 Mock된 결과값을 수정
    naverUsersService.naverUsersRepository.createNaverUser = jest.fn(
      () => createNaverUserResultSchema
    );

    try {
      // Service의 findNaverUser를 Mocking
      naverUsersService.findNaverUser = jest.fn(
        () => validationErrorByDuplicatedIdSchema
      );

      await naverUsersService.createNaverUser(createNaverUserInsertSchema);
    } catch (error) {
      // createNaverUser 메소드를 호출할 때, findNaverUser Services를 호출했는지 검증
      expect(naverUsersService.findNaverUser).toHaveBeenCalledWith({
        id: createNaverUserInsertSchema.id,
        nickname: createNaverUserInsertSchema.nickname,
      });

      // 현재 발생한 에러의 Instance가 ValidationError Instance와 같은지 검증
      expect(error).toBeInstanceOf(ValidationError);
      expect(error.message).toEqual(
        '동일한 ID를 가진 Naver User가 이미 존재합니다.'
      );
    }
  });

  test('createNaverUser Method의 Fail Case By duplicated Nickname', async () => {
    const validationErrorByDuplicatedNicknameSchema = {
      nickname: createNaverUserInsertSchema.nickname,
    };

    // 새로운 서비스 할당
    let naverUsersService = new NaverUsersService();
    // Repository를 Mocking
    naverUsersService.naverUsersRepository = Object.assign(
      {},
      mockNaverUsersRepository
    );
    // Repository의 createNaverUser Method의 Mock된 결과값을 수정
    naverUsersService.naverUsersRepository.createNaverUser = jest.fn(
      () => createNaverUserResultSchema
    );

    try {
      // Service의 findNaverUser를 Mocking
      naverUsersService.findNaverUser = jest.fn(
        () => validationErrorByDuplicatedNicknameSchema
      );

      await naverUsersService.createNaverUser(createNaverUserInsertSchema);
    } catch (error) {
      // createNaverUser 메소드를 호출할 때, findNaverUser Services를 호출했는지 검증
      expect(naverUsersService.findNaverUser).toHaveBeenCalledWith({
        id: createNaverUserInsertSchema.id,
        nickname: createNaverUserInsertSchema.nickname,
      });

      // 현재 발생한 에러의 Instance가 ValidationError Instance와 같은지 검증
      expect(error).toBeInstanceOf(ValidationError);
      expect(error.message).toEqual(
        '동일한 Nickname을 가진 Naver User가 이미 존재합니다.'
      );
    }
  });
});
