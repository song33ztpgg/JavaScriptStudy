const express = require('express');
const { NaverCafeComments } = require('../models');

class NaverCafeCommentsRepository extends NaverCafeComments {
  constructor() {
    super();
  }
}

module.exports = NaverCafeCommentsRepository;
