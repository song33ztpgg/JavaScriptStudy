const express = require('express');
const {
  NaverCafePosts,
  NaverCafeUsers,
  NaverCafeCategories,
} = require('../models');

const router = express.Router();

// NaverCafePosts.belongsTo(NaverCafeUsers, { foreignKey: "cafeUserId" });
// NaverCafePosts.belongsTo(NaverCafeCategories, { foreignKey: "cafeCategoryId" });
//
// NaverCafePosts.hasMany(NaverCafeLikes, { as: 'NaverCafeLikes', foreignKey: 'cafePostId' });
// NaverCafePosts.hasMany(NaverCafeComments, { as: 'NaverCafeComments', foreignKey: 'cafePostId' });

router.get('/', async (req, res) => {
  try {
    const naverCafePosts = await NaverCafePosts.findAll({
      include: [NaverCafeUsers, NaverCafeCategories],
    });

    res.json({ result: naverCafePosts });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { cafeCategoryId, cafeUserId, title, content } = req.body;
    const naverCafePost = await NaverCafePosts.create({
      cafeCategoryId,
      cafeUserId,
      title,
      content,
    });

    res.json({ result: naverCafePost });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

module.exports = router;
