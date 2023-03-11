const express = require('express');
const router = express.Router();

const NaverCafeUsersController = require('../controllers/naver-cafe-users.controller');
const naverCafeUsersController = new NaverCafeUsersController();

router.get('/', naverCafeUsersController.getAllNaverCafeUser);
router.post('/', naverCafeUsersController.createNaverCafeUser);

module.exports = router;
