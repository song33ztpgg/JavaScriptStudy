const express = require('express');
const router = express.Router();

const naverUsersRouter = require('./naver-users.route.js');
const naverCafesRouter = require('./naver-cafes.route.js');
const naverCafeUsersRouter = require('./naver-cafe-users.route.js');
const naverCafeCategoriesRouter = require('./naver-cafe-categories.route.js');
const naverCafePostsRouter = require('./naver-cafe-posts.route.js');
const naverCafeCommentsRouter = require('./naver-cafe-comments.route.js');
const naverCafeLikesRouter = require('./naver-cafe-likes.route.js');

router.use('/users', [naverUsersRouter]);
router.use('/cafes', [naverCafesRouter]);
router.use('/cafe-users', [naverCafeUsersRouter]);
router.use('/cafe-categories', [naverCafeCategoriesRouter]);
router.use('/cafe-posts', [naverCafePostsRouter]);
router.use('/cafe-comments', [naverCafeCommentsRouter]);
router.use('/cafe-likes', [naverCafeLikesRouter]);

module.exports = router;
