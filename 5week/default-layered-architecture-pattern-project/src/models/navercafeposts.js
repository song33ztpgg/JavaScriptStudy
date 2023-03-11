'use strict';
const { Model } = require('sequelize');

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
  class NaverCafePosts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.NaverCafeUsers, { foreignKey: 'cafeUserId' });
      this.belongsTo(models.NaverCafeCategories, {
        foreignKey: 'cafeCategoryId',
      });

      this.hasMany(models.NaverCafeLikes, {
        as: 'NaverCafeLikes',
        foreignKey: 'cafePostId',
      });
      this.hasMany(models.NaverCafeComments, {
        as: 'NaverCafeComments',
        foreignKey: 'cafePostId',
      });
    }
  }

  NaverCafePosts.init(
    {
      cafePostId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cafeCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'NaverCafeCategories',
          key: 'cafeCategoryId',
        },
        onDelete: 'cascade',
      },
      cafeUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'NaverCafeUsers',
          key: 'cafeUserId',
        },
        onDelete: 'cascade',
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
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
      modelName: 'NaverCafePosts',
    }
  );
  return NaverCafePosts;
};
