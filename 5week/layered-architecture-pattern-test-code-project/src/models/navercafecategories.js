'use strict';
const { Model } = require('sequelize');

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
  class NaverCafeCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.NaverCafes, { foreignKey: 'cafeId' });

      this.hasMany(models.NaverCafePosts, {
        as: 'NaverCafePosts',
        foreignKey: 'cafeCategoryId',
      });
    }
  }

  NaverCafeCategories.init(
    {
      cafeCategoryId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cafeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'NaverCafes',
          key: 'cafeId',
        },
        onDelete: 'cascade',
      },
      category: {
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
      modelName: 'NaverCafeCategories',
    }
  );
  return NaverCafeCategories;
};
