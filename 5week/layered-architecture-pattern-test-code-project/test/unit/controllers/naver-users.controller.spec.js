const NaverUsersController = require('../../../src/controllers/naver-users.controller');
const {
  createNaverUserResultSchemaByController,
  createNaverUserInsertSchemaByController,
} = require('../../fixtures/naver-users.fixtures');

const mockNaverUsersService = () => ({
  getAllNaverUser: jest.fn(),
  createNaverUser: jest.fn(),
});

let mockRequest = {
  body: jest.fn(),
};

let mockResponse = {
  status: jest.fn(),
  json: jest.fn(),
};

describe('naver-users Controller Layer Test', () => {
  let naverUsersController = new NaverUsersController();
  naverUsersController.naverUsersService = mockNaverUsersService();

  beforeEach(() => {
    // 모든 Mock을 초기화합니다.
    jest.resetAllMocks();
  });

  test('getAllNaverUser Method Success Case', async () => {
    mockResponse.status = jest.fn(() => {
      return mockResponse;
    });
    const getAllNaverUserReturnValue = [];
    naverUsersController.naverUsersService.getAllNaverUser = jest.fn(() => {
      return getAllNaverUserReturnValue;
    });

    await naverUsersController.getAllNaverUser(mockRequest, mockResponse);

    // getAllNaverUser 메소드는 몇번 호출되었는지
    expect(
      naverUsersController.naverUsersService.getAllNaverUser
    ).toHaveBeenCalledTimes(1);

    // getAllNaverUser 메소드는 어떤 값으로 호출되었는지
    expect(
      naverUsersController.naverUsersService.getAllNaverUser
    ).toHaveBeenCalledWith({});

    // getAllNaverUser의 staus는 몇번 호출되는가
    expect(mockResponse.status).toHaveBeenCalledTimes(1);

    // getAllNaverUser의 staus의 반환값을 무엇인가.
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    // getAllNaverUser의 json은 몇번 호출되는가.
    expect(mockResponse.json).toHaveBeenCalledTimes(1);

    // getAllNaverUser의 json의 반환값을 무엇인가.
    expect(mockResponse.json).toHaveBeenCalledWith({
      result: getAllNaverUserReturnValue,
    });
  });

  test('getAllNaverUser Method Failed Case', async () => {
    const getAllNaverUserErrorMessage = '강제로 발생시킨 에러입니다.';

    naverUsersController.naverUsersService.getAllNaverUser = jest.fn(() => {
      throw Error(getAllNaverUserErrorMessage);
    });

    // Error가 발생합니다.
    await naverUsersController.getAllNaverUser(mockRequest, mockResponse);

    // getAllNaverUser 메소드는 몇번 호출되었는지
    expect(
      naverUsersController.naverUsersService.getAllNaverUser
    ).toHaveBeenCalledTimes(1);

    // getAllNaverUser의 staus는 몇번 호출되는가
    expect(mockResponse.status).toHaveBeenCalledTimes(1);

    // getAllNaverUser의 staus의 반환값을 무엇인가.
    expect(mockResponse.status).toHaveBeenCalledWith(400);

    // getAllNaverUser의 json은 몇번 호출되는가.
    expect(mockResponse.json).toHaveBeenCalledTimes(1);

    // getAllNaverUser의 json의 반환값을 무엇인가.
    expect(mockResponse.json).toHaveBeenCalledWith({
      errorMessage: getAllNaverUserErrorMessage,
    });
  });

  test('createNaverUser Method Success Case', async () => {
    mockRequest.body = createNaverUserInsertSchemaByController;
    mockResponse.status = jest.fn(() => {
      return mockResponse;
    });
    naverUsersController.naverUsersService.createNaverUser = jest.fn(() => {
      return createNaverUserResultSchemaByController;
    });

    await naverUsersController.createNaverUser(mockRequest, mockResponse);

    // createNaverUser 메소드는 몇번 호출되었는지
    expect(
      naverUsersController.naverUsersService.createNaverUser
    ).toHaveBeenCalledTimes(1);

    // createNaverUser staus는 몇번 호출되는가
    expect(mockResponse.status).toHaveBeenCalledTimes(1);

    // createNaverUser staus의 반환값을 무엇인가.
    expect(mockResponse.status).toHaveBeenCalledWith(201);

    // createNaverUser json은 몇번 호출되는가.
    expect(mockResponse.json).toHaveBeenCalledTimes(1);

    // createNaverUser json의 반환값을 무엇인가.
    expect(mockResponse.json).toHaveBeenCalledWith({
      result: createNaverUserResultSchemaByController,
    });
  });

  test('createNaverUser Method Failed Case By InvalidParamsError', async () => {
    mockRequest.body = {
      ...createNaverUserInsertSchemaByController,
      id: null,
    };
    naverUsersController.naverUsersService.createNaverUser = jest.fn(() => {
      return createNaverUserResultSchemaByController;
    });

    await naverUsersController.createNaverUser(mockRequest, mockResponse);

    // createNaverUser 메소드는 몇번 호출되었는지
    expect(
      naverUsersController.naverUsersService.createNaverUser
    ).toHaveBeenCalledTimes(0);

    // createNaverUser staus의 반환값을 무엇인가.
    expect(mockResponse.status).toHaveBeenCalledWith(409);

    // createNaverUser json의 반환값을 무엇인가.
    expect(mockResponse.json).toHaveBeenCalledWith({
      errorMessage: '요청한 데이터 형식이 올바르지 않습니다.',
    });
  });

  test('createNaverUser Method Failed Case By Default Error', async () => {
    const createNaverUserErrorMessage = '강제로 발생시킨 에러입니다.';

    mockRequest.body = {
      ...createNaverUserInsertSchemaByController,
    };
    naverUsersController.naverUsersService.createNaverUser = jest.fn(() => {
      throw Error(createNaverUserErrorMessage);
    });

    await naverUsersController.createNaverUser(mockRequest, mockResponse);

    // createNaverUser 메소드는 몇번 호출되었는지
    expect(
      naverUsersController.naverUsersService.createNaverUser
    ).toHaveBeenCalledTimes(1);

    // createNaverUser staus의 반환값을 무엇인가.
    expect(mockResponse.status).toHaveBeenCalledWith(400);

    // createNaverUser json의 반환값을 무엇인가.
    expect(mockResponse.json).toHaveBeenCalledWith({
      errorMessage: createNaverUserErrorMessage,
    });
  });
});
