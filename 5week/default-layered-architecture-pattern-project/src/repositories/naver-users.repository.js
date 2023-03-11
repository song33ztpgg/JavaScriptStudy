const express = require('express');
const { NaverUsers } = require('../models');

class NaverUsersRepository extends NaverUsers {
  constructor() {
    super();
  }
}

module.exports = NaverUsersRepository;
