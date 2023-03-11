const express = require('express');
const { NaverCategories } = require('../models');

class NaverCafeCategoriesRepository extends NaverCategories {
  constructor() {
    super();
  }
}

module.exports = NaverCafeCategoriesRepository;
