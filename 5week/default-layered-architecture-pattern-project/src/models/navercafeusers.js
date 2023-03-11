'use strict';
const { Model } = require('sequelize');

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
  class NaverCafeUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.NaverCafes, { foreignKey: 'cafeId' });
      this.belongsTo(models.NaverUsers, { foreignKey: 'userId' });

      this.hasMany(models.NaverCafePosts, {
        as: 'NaverCafePosts',
        foreignKey: 'cafeUserId',
      });
      this.hasMany(models.NaverCafeComments, {
        as: 'NaverCafeComments',
        foreignKey: 'cafeUserId',
      });
      this.hasMany(models.NaverCafeLikes, {
        as: 'NaverCafeLikes',
        foreignKey: 'cafeUserId',
      });
    }
  }

  NaverCafeUsers.init(
    {
      cafeUserId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cafeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'NaverCafes',
          key: 'cafeId',
        },
        onDelete: 'cascade',
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'NaverUsers',
          key: 'userId',
        },
        onDelete: 'cascade',
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isCafeUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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
      modelName: 'NaverCafeUsers',
    }
  );

  return NaverCafeUsers;
};
