const express = require('express');
const { NaverCafeCategories, NaverCafes } = require('../models');

const router = express.Router();

// NaverCafeCategories.belongsTo(NaverCafes, { foreignKey: "cafeId" });
//
// NaverCafeCategories.hasMany(NaverCafePosts, { as: 'NaverCafePosts', foreignKey: 'cafeCategoryId' });

router.get('/', async (req, res) => {
  try {
    const naverCafeCategories = await NaverCafeCategories.findAll({
      include: [NaverCafes],
    });

    res.json({ result: naverCafeCategories });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { cafeId, category } = req.body;
    const naverCafeCategory = await NaverCafeCategories.create({
      cafeId,
      category,
    });

    res.json({ result: naverCafeCategory });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

module.exports = router;
