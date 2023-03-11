CREATE TABLE NaverUsers
(
    userId       int(11)             NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id           varchar(255) UNIQUE NOT NULL,
    password     varchar(255)        NOT NULL,
    nickname     varchar(255) UNIQUE NOT NULL,
    profileImage varchar(255)        NULL,
    gender       TINYINT(1) UNSIGNED NOT NULL,
    createdAt    datetime            NOT NULL DEFAULT NOW(),
    updatedAt    datetime            NOT NULL DEFAULT NOW()
);

CREATE TABLE NaverCafes
(
    cafeId          int(11)             NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId          int(11)             NOT NULL,
    cafeUrl         varchar(255) UNIQUE NOT NULL,
    cafeName        varchar(255) UNIQUE NOT NULL,
    cafeLogo        varchar(255)        NULL,
    cafeDescription varchar(255)        NULL,
    createdAt       datetime            NOT NULL DEFAULT NOW(),
    updatedAt       datetime            NOT NULL DEFAULT NOW(),
    FOREIGN KEY (userId) REFERENCES NaverUsers (userId) ON DELETE CASCADE
);

CREATE TABLE NaverCafeUsers
(
    cafeUserId  int(11)             NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cafeId      int(11)             NOT NULL,
    userId      int(11)             NOT NULL,
    nickname    varchar(255) UNIQUE NOT NULL,
    description varchar(255)        NULL,
    isCafeUser  boolean             NOT NULL,
    createdAt   datetime            NOT NULL DEFAULT NOW(),
    updatedAt   datetime            NOT NULL DEFAULT NOW(),
    FOREIGN KEY (cafeId) REFERENCES NaverCafes (cafeId) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES NaverUsers (userId) ON DELETE CASCADE
);

CREATE TABLE NaverCafeCategories
(
    cafeCategoryId int(11)      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cafeId         int(11)      NOT NULL,
    category       varchar(255) NOT NULL,
    createdAt      datetime     NOT NULL DEFAULT NOW(),
    updatedAt      datetime     NOT NULL DEFAULT NOW(),
    FOREIGN KEY (cafeId) REFERENCES NaverCafes (cafeId) ON DELETE CASCADE
);

CREATE TABLE NaverCafePosts
(
    cafePostId     int(11)      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cafeCategoryId int(11)      NOT NULL,
    cafeUserId     int(11)      NOT NULL,
    title          varchar(255) NOT NULL,
    content        varchar(255) NOT NULL,
    createdAt      datetime     NOT NULL DEFAULT NOW(),
    updatedAt      datetime     NOT NULL DEFAULT NOW(),
    FOREIGN KEY (cafeCategoryId) REFERENCES NaverCafeCategories (cafeCategoryId) ON DELETE CASCADE,
    FOREIGN KEY (cafeUserId) REFERENCES NaverCafeUsers (userId) ON DELETE CASCADE
);

CREATE TABLE NaverCafeComments
(
    cafeCommentId int(11)      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cafePostId    int(11)      NOT NULL,
    cafeUserId    int(11)      NOT NULL,
    comment       varchar(255) NOT NULL,
    createdAt     datetime     NOT NULL DEFAULT NOW(),
    updatedAt     datetime     NOT NULL DEFAULT NOW(),
    FOREIGN KEY (cafePostId) REFERENCES NaverCafePosts (cafePostId) ON DELETE CASCADE,
    FOREIGN KEY (cafeUserId) REFERENCES NaverCafeUsers (userId) ON DELETE CASCADE
);

CREATE TABLE NaverCafeLikes
(
    cafeLikeId int(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cafeUserId int(11)  NOT NULL,
    cafePostId int(11)  NOT NULL,
    createdAt  datetime NOT NULL DEFAULT NOW(),
    updatedAt  datetime NOT NULL DEFAULT NOW(),
    FOREIGN KEY (cafePostId) REFERENCES NaverCafePosts (cafePostId) ON DELETE CASCADE,
    FOREIGN KEY (cafeUserId) REFERENCES NaverCafeUsers (userId) ON DELETE CASCADE
);