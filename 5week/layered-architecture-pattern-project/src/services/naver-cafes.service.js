const NaverCafesRepository = require('../repositories/naver-cafes.repository');
const { ValidationError } = require('../exceptions/index.exception');

class NaverCafesService {
  constructor() {
    this.naverCafesRepository = new NaverCafesRepository();
  }

  getAllNaverCafe = async ({}) => {
    const naverCafes = await this.naverCafesRepository.getAllNaverCafe({});

    return naverCafes;
  };

  createNaverCafe = async ({
    userId,
    cafeUrl,
    cafeName,
    cafeLogo,
    cafeDescription,
  }) => {
    const isExistNaverCafe = await this.naverCafesRepository.findNaverCafe({
      cafeUrl,
      cafeName,
    });
    if (isExistNaverCafe) {
      if (isExistNaverCafe.cafeUrl === cafeUrl)
        throw new ValidationError(
          '동일한 URL를 가진 Naver Cafe가 이미 존재합니다.'
        );
      else if (isExistNaverCafe.cafeName === cafeName)
        throw new ValidationError(
          '동일한 카페 이름을 가진 Naver Cafe가 이미 존재합니다.'
        );
    }

    const naverCafe = await this.naverCafesRepository.createNaverCafe({
      userId,
      cafeUrl,
      cafeName,
      cafeLogo,
      cafeDescription,
    });

    return naverCafe;
  };
}

module.exports = NaverCafesService;
