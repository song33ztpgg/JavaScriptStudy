const express = require('express');
const NaverCafeCategoriesRepository = require('../repositories/naver-cafe-categories.repository');

class NaverCafeCategoriesService {
  constructor() {
    this.naverCafeCategoriesRepository = new NaverCafeCategoriesRepository();
  }
}

module.exports = NaverCafeCategoriesService;
