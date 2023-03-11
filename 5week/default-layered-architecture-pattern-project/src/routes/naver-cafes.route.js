const express = require('express');
const { NaverCafes, NaverUsers } = require('../models');

const router = express.Router();

// NaverCafes.belongsTo(NaverUsers, { foreignKey: "userId" });
//
// NaverCafes.hasMany(NaverCafeUsers, { as: 'NaverCafeUsers', foreignKey: 'cafeId' });
// NaverCafes.hasMany(NaverCafeCategories, { as: 'NaverCafeCategories', foreignKey: 'cafeId' });

router.get('/', async (req, res) => {
  try {
    const naverCafes = await NaverCafes.findAll({
      include: [NaverUsers],
    });

    res.json({ result: naverCafes });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { userId, cafeUrl, cafeName, cafeLogo, cafeDescription } = req.body;
    const naverCafe = await NaverCafes.create({
      userId,
      cafeUrl,
      cafeName,
      cafeLogo,
      cafeDescription,
    });

    res.json({ result: naverCafe });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

module.exports = router;
