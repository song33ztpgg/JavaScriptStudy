const express = require('express');
const NaverCafeUsersService = require('../services/naver-cafe-users.service');

class NaverCafeUsersController {
  constructor() {
    this.naverCafeUsersService = new NaverCafeUsersService();
  }
}

module.exports = NaverCafeUsersController;
