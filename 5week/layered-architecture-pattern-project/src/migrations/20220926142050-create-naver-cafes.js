'use strict';
module.exports = {
  /**
   * @param {import("sequelize").QueryInterface} queryInterface - Sequelize Query Interface
   * @param {import("sequelize")} Sequelize - Sequelize
   * **/
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NaverCafes', {
      cafeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          // 관계를 맺는다.
          model: 'NaverUsers', // Users 테이블의
          key: 'userId', // userId 컬럼과
        },
        onDelete: 'cascade', // Users 테이블의 데이터가 사라질 경우 게시글도 naver Cafe도 사라진다.
      },
      cafeUrl: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      cafeName: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      cafeLogo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      cafeDescription: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW,
      },
    });
  },
  /**
   * @param {import("sequelize").QueryInterface} queryInterface - Sequelize Query Interface
   * @param {import("sequelize")} Sequelize - Sequelize
   * **/
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NaverCafes');
  },
};
