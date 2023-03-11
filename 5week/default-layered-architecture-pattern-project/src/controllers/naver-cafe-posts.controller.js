const express = require('express');
const NaverCafePostsService = require('../services/naver-cafe-posts.service');

class NaverCafePostsController {
  constructor() {
    this.naverCafePostsService = new NaverCafePostsService();
  }
}

module.exports = NaverCafePostsController;
