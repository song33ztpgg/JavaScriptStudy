const express = require('express');
const router = express.Router();

const NaverCafeCategoriesController = require('../controllers/naver-cafe-categories.controller');
const naverCafeCategoriesController = new NaverCafeCategoriesController();

router.get('/', naverCafeCategoriesController.getAllNaverCafeCategory);
router.post('/', naverCafeCategoriesController.createNaverCafeCategory);

module.exports = router;
