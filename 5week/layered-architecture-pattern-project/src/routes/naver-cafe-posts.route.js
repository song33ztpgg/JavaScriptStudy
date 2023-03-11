const express = require('express');
const router = express.Router();

const NaverCafePostsController = require('../controllers/naver-cafe-posts.controller');
const naverCafePostsController = new NaverCafePostsController();

router.get('/', naverCafePostsController.getAllNaverCafePost);
router.post('/', naverCafePostsController.createNaverCafePost);

module.exports = router;
