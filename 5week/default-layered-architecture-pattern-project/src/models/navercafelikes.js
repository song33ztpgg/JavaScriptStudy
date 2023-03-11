'use strict';
const { Model } = require('sequelize');

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
  class NaverCafeLikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.NaverCafeUsers, { foreignKey: 'cafeUserId' });
      this.belongsTo(models.NaverCafePosts, { foreignKey: 'cafePostId' });
    }
  }

  NaverCafeLikes.init(
    {
      cafeLikeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      cafePostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'NaverCafePosts',
          key: 'cafePostId',
        },
        onDelete: 'cascade',
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
      modelName: 'NaverCafeLikes',
    }
  );
  return NaverCafeLikes;
};
