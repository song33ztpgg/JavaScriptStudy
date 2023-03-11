const NaverCafeCategoriesRepository = require('../repositories/naver-cafe-categories.repository');

class NaverCafeCategoriesService {
  constructor() {
    this.naverCafeCategoriesRepository = new NaverCafeCategoriesRepository();
  }

  getAllNaverCafeCategory = async ({}) => {
    const naverCafeCategories =
      await this.naverCafeCategoriesRepository.getAllNaverCafeCategory({});

    return naverCafeCategories;
  };

  createNaverCafeCategory = async ({ cafeId, category }) => {
    const naverCafeCategory =
      await this.naverCafeCategoriesRepository.createNaverCafeCategory({
        cafeId,
        category,
      });

    return naverCafeCategory;
  };
}

module.exports = NaverCafeCategoriesService;
