const express = require('express');
const NaverUsersRepository = require('../repositories/naver-users.repository');

class NaverUsersService {
  constructor() {
    this.naverUsersRepository = new NaverUsersRepository();
  }
}

module.exports = NaverUsersService;
