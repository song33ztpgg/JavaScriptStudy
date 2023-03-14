const express = require('express');
const router = express.Router();

const NaverCafesController = require('../controllers/naver-cafes.controller');
const naverCafesController = new NaverCafesController();

router.get('/', naverCafesController.getAllNaverCafe);
router.post('/', naverCafesController.createNaverCafe);

module.exports = router;
