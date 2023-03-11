const express = require('express');
const { NaverCafePosts } = require('../models');

class NaverCafePostsRepository extends NaverCafePosts {
  constructor() {
    super();
  }
}

module.exports = NaverCafePostsRepository;
