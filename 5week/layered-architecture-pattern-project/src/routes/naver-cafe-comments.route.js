const express = require('express');
const router = express.Router();

const NaverCafeCommentsController = require('../controllers/naver-cafe-comments.controller');
const naverCafeCommentsController = new NaverCafeCommentsController();

router.get('/', naverCafeCommentsController.getAllNaverCafeComment);
router.post('/', naverCafeCommentsController.createNaverCafeComment);

module.exports = router;
