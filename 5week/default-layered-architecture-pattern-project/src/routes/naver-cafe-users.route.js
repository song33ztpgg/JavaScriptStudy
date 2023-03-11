const express = require('express');
const { NaverCafeUsers, NaverCafes, NaverUsers } = require('../models');

const router = express.Router();

// NaverCafeUsers.belongsTo(NaverCafes, { foreignKey: "cafeId" });
// NaverCafeUsers.belongsTo(NaverUsers, { foreignKey: "userId" });
//
// NaverCafeUsers.hasMany(NaverCafePosts, { as: 'NaverCafePosts', foreignKey: 'cafeUserId' });
// NaverCafeUsers.hasMany(NaverCafeComments, { as: 'NaverCafeComments', foreignKey: 'cafeUserId' });
// NaverCafeUsers.hasMany(NaverCafeLikes, { as: 'NaverCafeLikes', foreignKey: 'cafeUserId' });

router.get('/', async (req, res) => {
  try {
    const naverCafeUsers = await NaverCafeUsers.findAll({
      include: [NaverCafes, NaverUsers],
    });

    res.json({ result: naverCafeUsers });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { cafeId, userId, nickname, description } = req.body;
    const naverCafeUser = await NaverCafeUsers.create({
      cafeId,
      userId,
      nickname,
      description,
      isCafeUser: true,
    });

    res.json({ result: naverCafeUser });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

module.exports = router;
