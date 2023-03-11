const express = require('express');
const NaverUsersController = require('../controllers/naver-users.controller');

const router = express.Router();
const naverUsersController = new NaverUsersController();

router.get('/', naverUsersController.getAllNaverUser);
router.post('/', naverUsersController.createNaverUser);

module.exports = router;
