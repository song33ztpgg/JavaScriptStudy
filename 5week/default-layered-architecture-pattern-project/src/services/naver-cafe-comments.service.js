const express = require('express');
const NaverCafeCommentsRepository = require('../repositories/naver-cafe-comments.repository');

class NaverCafeCommentsService {
  constructor() {
    this.naverCafeCommentsRepository = new NaverCafeCommentsRepository();
  }
}

module.exports = NaverCafeCommentsService;
