# Node.js Middle Project
항해99 Node.js 숙련 주차 프로젝트입니다.

## 실행방법
- **Sequelize를 이용해 DB를 생성하기 전 `config/config.json` 파일을 꼭 수정해주세요!**
``` shell
# npm 패키지를 설치합니다.
$ npm install

# Sequelize를 이용해 DB를 생성합니다.
$ npx sequelize db:create

# Sequelize를 이용해 테이블을 생성합니다.
$ npx sequelize db:migrate

# nodemon을 이용해 프로젝트를 실행합니다.
#  만약 nodemon 실행이 되지 않을 경우 [$ node app.js ] 명령어로 실행해주세요.
$ npx nodemon app.js

```



## DB ERD
![노드 숙련 프로젝트 DB ERD](https://user-images.githubusercontent.com/49636918/210510061-1d9fd51e-e335-43cb-b96e-4ea1d8ae39f1.png)


## MySQL Create Table Query
``` sql
CREATE TABLE Users
(
    userId    int(11)      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nickname  varchar(255) NOT NULL UNIQUE,
    password  varchar(255) NOT NULL,
    createdAt datetime     NOT NULL DEFAULT NOW(),
    updatedAt datetime     NOT NULL DEFAULT NOW()
);

CREATE TABLE Posts
(
    postId    int(11)       NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserId    int(11)       NOT NULL,
    title     varchar(255)  NOT NULL,
    content   varchar(3000) NOT NULL,
    createdAt datetime      NOT NULL DEFAULT NOW(),
    updatedAt datetime      NOT NULL DEFAULT NOW(),
    FOREIGN KEY (UserId) REFERENCES Users (userId) ON DELETE CASCADE
);

CREATE TABLE Comments
(
    commentId int(11)      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    PostId    int(11)      NOT NULL,
    UserId    int(11)      NOT NULL,
    comment   varchar(255) NOT NULL,
    createdAt datetime     NOT NULL DEFAULT NOW(),
    updatedAt datetime     NOT NULL DEFAULT NOW(),
    FOREIGN KEY (PostId) REFERENCES Posts (postId) ON DELETE CASCADE,
    FOREIGN KEY (UserId) REFERENCES Users (userId) ON DELETE CASCADE
);

CREATE TABLE Likes
(
    likeId    int(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    PostId    int(11)  NOT NULL,
    UserId    int(11)  NOT NULL,
    createdAt datetime NOT NULL DEFAULT NOW(),
    updatedAt datetime NOT NULL DEFAULT NOW(),
    FOREIGN KEY (PostId) REFERENCES Posts (postId) ON DELETE CASCADE,
    FOREIGN KEY (UserId) REFERENCES Users (userId) ON DELETE CASCADE
);
```
