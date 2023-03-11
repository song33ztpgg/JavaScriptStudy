const express = require('express');
const NaverCafeUsersRepository = require('../repositories/naver-cafe-users.repository');

class NaverCafeUsersService {
  constructor() {
    this.naverCafeUsersRepository = new NaverCafeUsersRepository();
  }
}

module.exports = NaverCafeUsersService;
