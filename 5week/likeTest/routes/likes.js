const express = require('express');
const { Op } = require('sequelize');

const { Likes, Posts, sequelize, Users } = require('../models');
const authMiddleware = require('../middlewares/authMiddleware');
const { parseModelToFlatObject } = require('../helpers/sequelize.helper');

const router = express.Router();

// 좋아요 게시글 조회
router.get('/like', authMiddleware, async (req, res) => {
  try {
    const { userId } = res.locals.user;

    const posts = await Posts.findAll({
      attributes: [
        'postId',
        'title',
        'createdAt',
        'updatedAt',
        [sequelize.fn('COUNT', sequelize.col('Likes.PostId')), 'likes'],
      ],
      include: [
        {
          model: Users,
          attributes: ['userId', 'nickname'],
        },
        {
          model: Likes,
          attributes: [],
          required: true,
          where: {
            [Op.and]: [{ UserId: userId }],
          },
        },
      ],
      group: ['Posts.postId'],
      order: [['createdAt', 'DESC']],
      raw: true,
    }).then((likes) => parseLikePostsModel(likes));

    const parseLikePostsModel = (likes) => {
      return likes.map((like) => {
        let obj = {};

        for (const [k, v] of Object.entries(like)) {
          if (k.split('.').length > 1) {
            const key = k.split('.')[1];
            obj[key] = v;
          } else obj[k] = v;
        }
        return obj;
      })
    } // 5번 답 : 저 문구 자체를 위로 올리고 function 문으로 바꾸면 된다.

    return res.status(200).json({
      data: posts,
    });
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    return res.status(400).json({
      errorMessage: '좋아요 게시글 조회에 실패하였습니다.',
    });
  }
});

// 좋아요 업데이트
router.put('/:postId/like', authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = res.locals.user;

    const isExistPost = await Posts.findByPk(postId);

    if (!isExistPost) {
      return res.status(404).json({
        errorMessage: '게시글이 존재하지 않습니다.',
      });
    }

    let isLike = await Likes.findOne({
      where: {
        PostId: postId,
        UserId: userId,
      },
    });

    if (!isLike) {
      await Likes.create({ PostId: postId, UserId: userId });

      return res
        .status(200)
        .json({ message: '게시글의 좋아요를 등록하였습니다.' });
    } else {
      await Likes.destroy({
        where: { PostId: postId, UserId: userId },
      });

      return res
        .status(200)
        .json({ message: '게시글의 좋아요를 취소하였습니다.' });
    }
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    return res.status(400).json({
      errorMessage: '게시글 좋아요에 실패하였습니다.',
    });
  }
});

module.exports = router;
