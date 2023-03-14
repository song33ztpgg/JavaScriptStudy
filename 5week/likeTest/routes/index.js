const express = require('express');
const postsRouter = require("./posts");
const commentsRouter = require("./comments");
const usersRouter = require("./signup");
const authRouter = require("./login")
const likesRouter = require("./likes")

const router = express.Router();

router.use('/posts', [postsRouter, likesRouter]);
router.use('/comments', [commentsRouter]);
router.use('/signup', [usersRouter]);
router.use('/login', [authRouter]);

module.exports = router;
