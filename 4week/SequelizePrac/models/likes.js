'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Like - Users
      this.belongsTo(models.Users, { // 2. Users 모델에게 N:1 관계 설정을 합니다.
        targetKey: 'userId', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'UserId', // 4. Posts 모델의 UserId 컬럼과 연결합니다.
      });

      //Like - Posts
      this.hasOne(models.Posts, { // 2. Comments 모델에게 1:1 관계 설정을 합니다.
        targetKey: 'postId', // 3. Posts 모델의 postId 컬럼을
        foreignKey: 'PostId', // 4. Comments 모델의 PostId 컬럼과 연결합니다.
      });
    }
  }
  Likes.init(
    {
      PostId: {
        allowNull: false, // NOT NULL
        type: DataTypes.INTEGER,
      },
      UserId: {
        allowNull: false, // NOT NULL
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      LikeCount: { 
        type: DataTypes.INTEGER,
        primaryKey: true, // Primary Key (기본키)
      }
    },
    {
      sequelize,
      modelName: 'Likes',
    }
  );
  return Likes;
};