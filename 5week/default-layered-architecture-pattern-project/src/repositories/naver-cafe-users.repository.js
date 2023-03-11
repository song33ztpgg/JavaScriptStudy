const express = require('express');
const { NaverCafeUsers } = require('../models');

class NaverCafeUsersRepository extends NaverCafeUsers {
  constructor() {
    super();
  }
}

module.exports = NaverCafeUsersRepository;
