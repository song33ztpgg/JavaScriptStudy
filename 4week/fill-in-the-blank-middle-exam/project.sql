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