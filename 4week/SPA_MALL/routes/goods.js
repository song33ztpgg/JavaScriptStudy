const express = require("express");
const router = express.Router();
const Cart = require("../schemas/cart.js")
const Goods = require("../schemas/goods.js");
const authMiddleware = require("../middlewares/auth-middleware");


//장바구니 조회 API
router.get("/goods/cart",authMiddleware, async(req,res) => {
  //모든값을 담는다         배열로 넘어온다,여러값을 가져온다(배열)
  const {userId} = res.locals.user;
  const carts = await Cart.find({userId});
 
  //객체에서 goodsId값만 찾아 넣는다
  const goodsIds = carts.map((cart) => {
      return cart.goodsId;
  })

  //Goods에 행당되는 모든 정보를 가지고 올건데 
  //만약 goodsId 변수 안에 존재하는 값일때에만 조회하라
  const goods = await Goods.find({ goodsId : goodsIds });

  const results = carts.map((cart) => {
      return {
          "quantity": cart.quantity,
          "goods": goods.find((item) => item.goodsId === cart.goodsId),
      }
  })

  res.json({
      "carts": results,
  })

});



//★ 상품 목록 조회 API
router.get("/goods", async (req, res) => {
  const { category } = req.query;

  //                             카데고리 값존재 ? 카테고리 : 전체값
  const goods = await Goods.find(category ? { category } : {})
    .sort("-date")
    .exec();

  const results = goods.map((item) => {
    return {
      goodsId: item.goodsId,
      name: item.name,
      price: item.price,
      thumbnailUrl: item.thumbnailUrl,
      category: item.category,
    };
  });

  res.json({ goods: results });
});

// ★ 상품 상세 조회 API
router.get("/goods/:goodsId", async (req, res) => {
  const { goodsId } = req.params;

  const goods = await Goods.findOne({ goodsId: goodsId }).exec();

  if (!goods) return res.status(404).json({});

  //배열값이 아니기에 resule에 하나로 다넣는다
  const result = {
    goodsId: goods.goodsId,
    name: goods.name,
    price: goods.price,
    thumbnailUrl: goods.thumbnailUrl,
    category: goods.category,
  }

  res.json({ goods: result });
});


//★장바구니 등록 API
 router.post("/goods/:goodsId/cart", authMiddleware,async(req,res)=>{
  const {userId} = res.locals.user;
  // const goodsId = req.params.goodsId;
  // const quantity = req.body.quantity;
  //파라미터에서 goodId를 가져오고 post형식이기에 body를 사용한ㄷ다
  const {goodsId} = req.params;
  const {quantity} = req.body;
  
  //장바구니에 이미 있는 정보인지 확인 하기위해 카트 정보를 가져온다
  const existCarts = await Cart.find({userId,goodsId});

  //장바구니에 무언가 있었을 경우 실행
  if(existCarts.length) {
    return res.status(400).json({
      success:false,
      errorMessage:"이미 장바구니에 해당 제품이 존재합니다",
    })
  }

  await Cart.create({userId,goodsId,quantity});
  
  res.json({result : "succes"});

 })

//★장바구니 수정 API
 router.put("/goods/:goodsId/cart", authMiddleware, async(req,res)=>{
  const {userId} = res.locals.user;
  const {goodsId} = req.params;
  const {quantity} = req.body;

  const existCarts = await Cart.find({userId, goodsId});

  if(existCarts.length) {
    await Cart.updateOne(
      //goodsId에 해당하는 값이 있을 경우
      {userId,goodsId: goodsId},
      //수정한다 quantity값을 quantity로 수저
      {$set:{quantity:quantity}}
    )
  }
  
  res.status(200).json({success:true});
})

//★장바구니 삭제 API
router.delete("/goods/:goodsId/cart",authMiddleware, async(req,res)=>{
  const {userId} = res.locals.user;
  const {goodsId} = req.params;

  const existCarts = await Cart.find({userId,goodsId});

  if(existCarts.length) {
    await Cart.deleteOne({userId,goodsId})
  }
  
  res.json({success:true});
})



router.post('/goods/', async (req,res) => { 
 
  const {goodsId, name, thumbnailUrl,category, price} = req.body;
 
  const goods = await Goods.find({ goodsId });
  if (goods.length) {
    return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
  }

   const createdGoods = await Goods.create({goodsId, name, thumbnailUrl,category, price});
  res.json({goods : createdGoods});
  
})

  router.get('/',(req,res) => {
    //반환한다.(값을)
    res.send("get Method");
}) 

module.exports = router;



  // router.get("/goods/:goodsId",(req,res) => { 
  //   const { goodsId }  = req.params;

  //   //아래와 같은 코드
  //   // let result = null;
  //   // for(const good of goods){
  //   //   if(good.goodsId === Number(goodsId)) {
  //   //     result = good;
  //   //   }
  //   // }

  //   const [result] = goods.filter((good) =>Number(goodsId) === good.goodsId)   
  //   res.status(200).json({detail : result})
  // });

// (경로, (전달,반환))
// localhost:3000/api/ GET

// localhost:3000/api/about/ GET
// router.get('/about', (req,res) => {
//     res.send("goods.js about PATH");
// })

//router를 밖으로 내보낼수 있도록 작업






  // res.json(req.body);
  
  // const goods = await Goods.find({goodsId});
  // if(goods.length) { 
  //   return res.status(400).json({
  //     success:false, 
  //     errorMessageg: "이미존재하는 ID입니다"
  //   });
  // }  


  // const { request, response } = require("express");
/*
//// 기존 값
const express = require("express");
const router = express.Router();

//상품 목록 조회 API
router.get("/goods", (req, res) => {
  res.json({ goods: goods });
});

//상품 상세 조회 API
router.get("/goods/:goodsId", (req, res) => {
  const { goodsId } = req.params;
  const [detail] = goods.filter((goods) => goods.goodsId === Number(goodsId));
  res.json({ detail });
});

const Cart = require("../schemas/cart.js");

router.post("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const existsCarts = await Cart.find({ goodsId });
  if (existsCarts.length) {
    return res.status(400).json({
      success: false,
      errorMessage: "이미 장바구니에 해당하는 상품이 존재합니다.",
    })
  }

  await Cart.create({ goodsId, quantity });

  res.json({ result: "success" });
})

router.put("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const existsCarts = await Cart.find({ goodsId });
  if (existsCarts.length) {
    await Cart.updateOne(
      { goodsId: goodsId },
      { $set: { quantity: quantity } }
    )
  }
  res.status(200).json({ success: true });
})

router.delete("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;

  const existsCarts = await Cart.find({ goodsId });
  if (existsCarts.length) {
    await Cart.deleteOne({ goodsId });
  }

  res.json({ result: "success" });
})

const Goods = require("../schemas/goods.js");
router.post("/goods", async (req, res) => {
  const { goodsId, name, thumbnailUrl, category, price } = req.body;

  const goods = await Goods.find({ goodsId });

  if (goods.length) {
    return res.status(400).json({
      success: false,
      errorMessage: "이미 존재하는 GoodsId입니다."
    });
  }

  const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

  res.json({ goods: createdGoods });
})

module.exports = router;

/////////////////////////////////////////////////////////////////////////////////
const goods = [
  {
    goodsId: 4,
    name: "상품 4",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg",
    category: "drink",
    price: 0.1,
  },
  {
    goodsId: 3,
    name: "상품 3",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg",
    category: "drink",
    price: 2.2,
  },
  {
    goodsId: 2,
    name: "상품 2",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg",
    category: "drink",
    price: 0.11,
  },
  {
    goodsId: 1,
    name: "상품 1",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg",
    category: "drink",
    price: 6.2,
  },
];*/
