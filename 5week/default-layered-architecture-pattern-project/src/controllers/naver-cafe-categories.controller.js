const express = require('express');
const NaverCafeCategoriesService = require('../services/naver-cafe-categories.service');

class NaverCafeCategoriesController {
  constructor() {
    this.naverCafeCategoriesService = new NaverCafeCategoriesService();
  }
}

module.exports = NaverCafeCategoriesController;
