const express = require('express');
const NaverCafePostsRepository = require('../repositories/naver-cafe-posts.repository');

class NaverCafePostsService {
  constructor() {
    this.naverCafePostsRepository = new NaverCafePostsRepository();
  }
}

module.exports = NaverCafePostsService;
