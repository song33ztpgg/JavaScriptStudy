const express = require('express');
const NaverUsersService = require('../services/naver-users.service');

class NaverUsersController {
  constructor() {
    this.naverUsersService = new NaverUsersService();
  }
}

module.exports = NaverUsersController;
