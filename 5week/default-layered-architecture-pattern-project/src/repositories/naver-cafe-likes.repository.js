const express = require('express');
const { NaverCafeLikes } = require('../models');

class NaverCafeLikesRepository extends NaverCafeLikes {
  constructor() {
    super();
  }
}

module.exports = NaverCafeLikesRepository;
