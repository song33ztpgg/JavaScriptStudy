const NaverUsersRepository = require('../../../src/repositories/naver-users.repository');
const {
  getNaverUserByPkInsertSchema,
  findNaverUserInsertSchema,
  createNaverUserInsertSchemaByRepository,
} = require('../../fixtures/naver-users.fixtures');
const { Op } = require('sequelize');

const mockNaverUsersModel = () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  findByPk: jest.fn(),
});

test('hehe', () => {
  expect(1 + 1).toBe(2);
});

describe('naver-users Repository Layer Test', () => {
  let naverUsersRepository = new NaverUsersRepository();
  naverUsersRepository.NaverUsers = mockNaverUsersModel();

  beforeEach(() => {
    // 모든 Mock을 초기화합니다.
    jest.resetAllMocks();
  });

  test('getAllNaverUser Method toHaveBeenCalled', async () => {
    const naverUsers = await naverUsersRepository.getAllNaverUser({});

    // findAll 메소드는 몇번 호출되었는지
    expect(naverUsersRepository.NaverUsers.findAll).toHaveBeenCalledTimes(1);

    // findAll 메소드가 호출된 인자를 검증합니다.
    expect(naverUsersRepository.NaverUsers.findAll).toHaveBeenCalledWith();
  });

  test('getNaverUserByPk Method toHaveBeenCalled', async () => {
    const naverUser = await naverUsersRepository.getNaverUserByPk(
      getNaverUserByPkInsertSchema
    );

    // findByPk 메소드는 몇번 호출되었는지
    expect(naverUsersRepository.NaverUsers.findByPk).toHaveBeenCalledTimes(1);

    // findByPk 메소드가 호출된 인자를 검증합니다.
    expect(naverUsersRepository.NaverUsers.findByPk).toHaveBeenCalledWith(
      getNaverUserByPkInsertSchema.userId
    );
  });

  test('findNaverUser Method toHaveBeenCalled', async () => {
    const naverUser = await naverUsersRepository.findNaverUser(
      findNaverUserInsertSchema
    );

    // findOne 메소드는 몇번 호출되었는지
    expect(naverUsersRepository.NaverUsers.findOne).toHaveBeenCalledTimes(1);

    // findOne 메소드가 호출된 인자를 검증합니다.
    expect(naverUsersRepository.NaverUsers.findOne).toHaveBeenCalledWith({
      where: {
        [Op.or]: [
          { id: findNaverUserInsertSchema.id },
          { nickname: findNaverUserInsertSchema.nickname },
        ],
      },
    });
  });

  test('createNaverUser Method toHaveBeenCalled', async () => {
    const naverUser = await naverUsersRepository.createNaverUser(
      createNaverUserInsertSchemaByRepository
    );

    // create 메소드는 몇번 호출되었는지
    expect(naverUsersRepository.NaverUsers.create).toHaveBeenCalledTimes(1);

    // create 메소드가 호출된 인자를 검증합니다.
    expect(naverUsersRepository.NaverUsers.create).toHaveBeenCalledWith(
      createNaverUserInsertSchemaByRepository
    );
  });
});
