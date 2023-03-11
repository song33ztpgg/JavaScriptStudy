const express = require('express');
const { NaverCafeLikes, NaverCafeUsers, NaverCafePosts } = require('../models');

const router = express.Router();

// NaverCafeLikes.belongsTo(NaverCafeUsers, { foreignKey: "cafeUserId" });
// NaverCafeLikes.belongsTo(NaverCafePosts, { foreignKey: "cafePostId" });

router.get('/', async (req, res) => {
  try {
    const naverCafeLikes = await NaverCafeLikes.findAll({
      include: [NaverCafeUsers, NaverCafePosts],
    });

    const naverCafeLikesExcludeCafeUserId = await NaverCafeLikes.findAll({
      attributes: {
        exclude: ['cafeUserId'],
      },
      include: [
        {
          model: NaverCafeUsers,
          attributes: [
            'cafeId',
            'userId',
            'nickname',
            'description',
            'isCafeUser',
            'createdAt',
            'updatedAt',
          ],
        },
      ],
    });

    console.log(JSON.stringify(naverCafeLikesExcludeCafeUserId, null, 2));

    res.json({ result: naverCafeLikes });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { cafeUserId, cafePostId } = req.body;
    const naverCafeLike = await NaverCafeLikes.create({
      cafeUserId,
      cafePostId,
    });

    res.json({ result: naverCafeLike });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

module.exports = router;
