const express = require('express');
const NaverCafeCommentsService = require('../services/naver-cafe-comments.service');

class NaverCafeCommentsController {
  constructor() {
    this.naverCafeCommentsService = new NaverCafeCommentsService();
  }
}

module.exports = NaverCafeCommentsController;
