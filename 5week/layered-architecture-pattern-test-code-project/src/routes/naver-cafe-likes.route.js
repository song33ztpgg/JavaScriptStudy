const express = require('express');
const router = express.Router();

const NaverCafeLikesController = require('../controllers/naver-cafe-likes.controller');
const naverCafeLikesController = new NaverCafeLikesController();

router.get('/', naverCafeLikesController.getAllNaverCafeLike);
router.post('/', naverCafeLikesController.createNaverCafeLike);
router.delete('/', naverCafeLikesController.deleteNaverCafeLike);

module.exports = router;
