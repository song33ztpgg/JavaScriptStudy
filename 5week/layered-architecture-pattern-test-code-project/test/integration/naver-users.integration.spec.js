const supertest = require('supertest');
const app = require('../../src/app');
const {
  createNaverUserInsertSchemaByController,
  createNaverUserResultSchemaByController,
} = require('../fixtures/naver-users.fixtures');
const { NaverUsers } = require('../../src/models');

// FIXME: 실제 Production 환경일 경우 매우 위험한 방법입니다.
//  해당 테스트를 하기 위해선 DB 연결 상태에 대해서 명확하게 파악을 한 이후 진행해주세요.
beforeAll(async () => {
  if (process.env.NODE_ENV === 'test') await NaverUsers.destroy({ where: {} });
  else throw new Error('NODE_ENV가 test로 설정되어 있지 않습니다.');
});

describe('naver-users Domain', () => {
  beforeEach(() => {
    // 모든 Mock을 초기화합니다.
    jest.resetAllMocks();
  });

  test('GET localhost:3016/api/users 최초 호출 시 아무런 데이터가 존재하지 않음.', async () => {
    const response = await supertest(app).get('/api/users').send({});

    const responseByJson = JSON.parse(response.text);

    expect(response.status).toEqual(200);
    expect(responseByJson.result).toEqual([]);
  });

  test('POST localhost:3016/api/users 최초 호출 시 NaverUser 생성', async () => {
    const response = await supertest(app)
      .post('/api/users')
      .send(createNaverUserInsertSchemaByController);
    const responseByJson = JSON.parse(response.text);

    expect(response.status).toEqual(201);
    // 해당 Object에서 특정 인자가 포함되어있는지 검증합니다.
    expect(responseByJson.result).toMatchObject({
      id: createNaverUserResultSchemaByController.id,
      nickname: createNaverUserResultSchemaByController.nickname,
      password: createNaverUserResultSchemaByController.password,
    });
  });

  test('POST localhost:3016/api/users 동일한 값으로 호출 시 Error Case', async () => {
    const response = await supertest(app)
      .post('/api/users')
      .send(createNaverUserInsertSchemaByController);
    const responseByJson = JSON.parse(response.text);

    expect(response.status).toEqual(412);
    expect(responseByJson.errorMessage).toEqual(
      '동일한 ID를 가진 Naver User가 이미 존재합니다.'
    );
  });

  test('GET localhost:3016/api/users 호출 시 NaverUser가 1개 생성됨', async () => {
    const response = await supertest(app).get('/api/users').send({});
    const responseByJson = JSON.parse(response.text);

    // 반환된 Http Status Code는 200번 입니다.
    expect(response.status).toEqual(200);
    // 반환된 result 갯수는 1개 입니다.
    expect(responseByJson.result).toHaveLength(1);
    // 반환된 result의 1번째 결과값은 아래 Object를 포함합니다.
    expect(responseByJson.result[0]).toMatchObject({
      id: createNaverUserResultSchemaByController.id,
      nickname: createNaverUserResultSchemaByController.nickname,
      password: createNaverUserResultSchemaByController.password,
      profileImage: null,
    });
  });
});
