'use strict';
const { Model } = require('sequelize');

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
  class NaverUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.NaverCafes, {
        as: 'NaverCafes',
        foreignKey: 'userId',
      });
      this.hasMany(models.NaverCafeUsers, {
        as: 'NaverCafeUsers',
        foreignKey: 'userId',
      });
    }
  }

  NaverUsers.init(
    {
      userId: {
        allowNull: false, // NOT NULL, Null을 허용하지 않음
        autoIncrement: true, // AUTO_INCREMENT
        primaryKey: true, // PRIMARY KEY, 기본키
        type: DataTypes.INTEGER,
      },
      id: {
        type: DataTypes.STRING,
        unique: true, // UNIQUE, 유일한 값만 존재할 수 있음
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: true, // NULL, Null을 허용함
      },
      gender: {
        type: DataTypes.TINYINT.UNSIGNED, // TINYINT UNSIGNED, 1바이트 숫자를 양의 정수로만 사용할 수 있음
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // 아무런 값을 입력하지 않을 경우 현재 시간을 할당
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'NaverUsers',
    }
  );

  return NaverUsers;
};
