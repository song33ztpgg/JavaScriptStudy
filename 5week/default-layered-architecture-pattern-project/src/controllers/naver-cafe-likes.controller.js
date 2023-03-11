const express = require('express');
const NaverCafeLikesService = require('../services/naver-cafe-likes.service');

class NaverCafeLikesController {
  constructor() {
    this.naverCafeLikesService = new NaverCafeLikesService();
  }
}

module.exports = NaverCafeLikesController;
