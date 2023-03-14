const NaverUsersService = require('../services/naver-users.service');
const { InvalidParamsError } = require('../exceptions/index.exception');

class NaverUsersController {
  constructor() {
    this.naverUsersService = new NaverUsersService();
  }

  /**
   * @param {import("express").request} req - express Request
   * @param {import("express").response} res - express Response
   * **/
  getAllNaverUser = async (req, res) => {
    try {
      const naverUsers = await this.naverUsersService.getAllNaverUser({});

      res.status(200).json({ result: naverUsers });
    } catch (error) {
      console.error(error);
      res.status(error.status || 400);
      res.json({ errorMessage: error.message });
    }
  };

  /**
   * @param {import("express").request} req - express Request
   * @param {import("express").response} res - express Response
   * **/
  createNaverUser = async (req, res) => {
    try {
      const { id, password, nickname, profileImage, gender } = req.body;

      if (!id || !password || !nickname || !gender) {
        throw new InvalidParamsError();
      }

      const naverUser = await this.naverUsersService.createNaverUser({
        id,
        password,
        nickname,
        profileImage,
        gender,
      });

      res.status(201).json({ result: naverUser });
    } catch (error) {
      console.error(error);
      res.status(error.status || 400);
      res.json({ errorMessage: error.message });
    }
  };
}

module.exports = NaverUsersController;
