'use strict';
module.exports = {
  /**
   * @param {import("sequelize").QueryInterface} queryInterface - Sequelize Query Interface
   * @param {import("sequelize")} Sequelize - Sequelize
   * **/
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NaverUsers', {
      userId: {
        allowNull: false, // NOT NULL, Null을 허용하지 않음
        autoIncrement: true, // AUTO_INCREMENT
        primaryKey: true, // PRIMARY KEY, 기본키
        type: Sequelize.DataTypes.INTEGER,
      },
      id: {
        type: Sequelize.DataTypes.STRING,
        unique: true, // UNIQUE, 유일한 값만 존재할 수 있음
        allowNull: false,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      nickname: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      profileImage: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true, // NULL, Null을 허용함
      },
      gender: {
        type: Sequelize.DataTypes.TINYINT.UNSIGNED, // TINYINT UNSIGNED, 1바이트 숫자를 양의 정수로만 사용할 수 있음
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW, // 아무런 값을 입력하지 않을 경우 현재 시간을 할당
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
    await queryInterface.dropTable('NaverUsers');
  },
};
