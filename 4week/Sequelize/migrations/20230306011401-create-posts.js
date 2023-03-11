'use strict';

// const { NOW } = require('sequelize');
// const { now } = require('sequelize/types/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      postId: {
        allowNull: false,        //null값 허용 안함 
        autoIncrement: true,     // 자동적으로 숫자 증가
        primaryKey: true,        //기본키 설정 여부
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,  //데이터 생성날짜
        defaultValue : Sequelize.fn("now") //아무것도 입력하지 않을때 실행
      },
      updatedAt: {
        allowNull: false, //데이터 수정날짜
        type: Sequelize.DATE,
       }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};