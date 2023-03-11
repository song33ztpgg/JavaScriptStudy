const express = require('express');
const {
  NaverCafeComments,
  NaverCafeUsers,
  NaverCafePosts,
} = require('../models');

const router = express.Router();

// NaverCafeComments.belongsTo(NaverCafeUsers, { foreignKey: "cafeUserId" });
// NaverCafeComments.belongsTo(NaverCafePosts, { foreignKey: "cafePostId" });

router.get('/', async (req, res) => {
  try {
    const naverCafeComments = await NaverCafeComments.findAll({
      include: [NaverCafeUsers, NaverCafePosts],
    });

    res.json({ result: naverCafeComments });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { cafePostId, cafeUserId, comment } = req.body;
    const naverCafeComment = await NaverCafeComments.create({
      cafePostId,
      cafeUserId,
      comment,
    });

    res.json({ result: naverCafeComment });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

module.exports = router;
