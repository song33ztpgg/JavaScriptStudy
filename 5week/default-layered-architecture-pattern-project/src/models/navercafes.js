'use strict';
const { Model } = require('sequelize');

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
  class NaverCafes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.NaverUsers, { foreignKey: 'userId' });

      this.hasMany(models.NaverCafeUsers, {
        as: 'NaverCafeUsers',
        foreignKey: 'cafeId',
      });
      this.hasMany(models.NaverCafeCategories, {
        as: 'NaverCafeCategories',
        foreignKey: 'cafeId',
      });
    }
  }

  NaverCafes.init(
    {
      cafeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          // 관계를 맺는다.
          model: 'NaverUsers', // Users 테이블의
          key: 'userId', // userId 컬럼과
        },
        onDelete: 'cascade', // Users 테이블의 데이터가 사라질 경우 게시글도 naver Cafe도 사라진다.
      },
      cafeUrl: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      cafeName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      cafeLogo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cafeDescription: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'NaverCafes',
    }
  );
  return NaverCafes;
};
