const express = require('express');
const NaverCafesRepository = require('../repositories/naver-cafes.repository');

class NaverCafesService {
  constructor() {
    this.naverCafesRepository = new NaverCafesRepository();
  }
}

module.exports = NaverCafesService;
