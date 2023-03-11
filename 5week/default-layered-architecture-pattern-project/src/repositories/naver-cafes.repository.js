const express = require('express');
const { NaverCafes } = require('../models');

class NaverCafesRepository extends NaverCafes {
  constructor() {
    super();
  }
}

module.exports = NaverCafesRepository;
