const express = require('express');
const NaverCafeLikesRepository = require('../repositories/naver-cafe-likes.repository');

class NaverCafeLikesService {
  constructor() {
    this.naverCafeLikesRepository = new NaverCafeLikesRepository();
  }
}

module.exports = NaverCafeLikesService;
