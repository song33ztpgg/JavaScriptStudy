# Layered Architecture Pattern Test Code Project


``` shell
# Test DB 생성
NODE_ENV=test npx sequelize db:create

# Test Table 생성
NODE_ENV=test npx sequelize db:migrate

# Jest를 이용한 Unit Test 실행
yarn test:unit

# supertest를 이용한 Integration Test 실행
yarn test:integration

# Jest를 이용한 모든 Test Code 실행
yarn test

# Jest를 이용한 모든 Test Code 실행 및 커버리지 확인
yarn test:coverage
```