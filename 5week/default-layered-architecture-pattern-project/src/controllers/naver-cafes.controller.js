const express = require('express');
const NaverCafesService = require('../services/naver-cafes.service');

class NaverCafesController {
  constructor() {
    this.naverCafesService = new NaverCafesService();
  }
}

module.exports = NaverCafesController;
