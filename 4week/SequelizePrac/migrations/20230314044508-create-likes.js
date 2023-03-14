'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Likes', {
      PostId: {
        //어떠한 계시글에
        allowNull: false, // NOT NULL
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts', // Posts 모델을 참조합니다.
          key: 'postId', // Posts 모델의 postId를 참조합니다.
        },
        onDelete: 'CASCADE', // 만약 Posts 모델의 postId가 삭제되면, Comments 모델의 데이터가 삭제됩니다.
      },
      UserId: {
        //userId컬럼은 user와 연관관계컴럼이다
        allowNull: false, // NOT NULL
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // Users 모델을 참조합니다.
          key: 'userId', // Users 모델의 userId를 참조합니다. 
          //users모델에 uesrId를 참조한다
        },
        onDelete: 'CASCADE', // 만약 Users 모델의 userId가 삭제되면, Posts 모델의 데이터가 삭제됩니다.
      },
      createdAt: {
        allowNull: false, // NOT NULL
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        allowNull: false, // NOT NULL
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      LikeCount: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Likes');
  }
};