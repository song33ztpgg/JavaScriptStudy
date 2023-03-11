const express = require('express');
const { NaverUsers } = require('../models');

const router = express.Router();

const genderType = {
  MAN: 1,
  WOMAN: 2,
};

// NaverUsers.hasMany(NaverCafes, { as: 'NaverCafes', foreignKey: 'userId' });
// NaverUsers.hasMany(NaverCafeUsers, { as: 'NaverCafeUsers', foreignKey: 'userId' });

router.get('/', async (req, res) => {
  try {
    const naverUsers = await NaverUsers.findAll();

    res.status(200).json({ result: naverUsers });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { id, password, nickname, profileImage, gender } = req.body;

    const naverUser = await NaverUsers.create({
      id,
      password,
      nickname,
      profileImage,
      gender: genderType[gender.toUpperCase()],
    });

    res.status(201).json({ result: naverUser });
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: error.message });
  }
});

module.exports = router;
