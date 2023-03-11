'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posts.init({
    postId: {
      allowNull: false,
      autoIncrement: true,  
      //자동으로 증가하는 값 
      //값이 삭제되도 그값은 무시하고 계속 1식 증가한다
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue : DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue : DataTypes.NOW,
    }
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};