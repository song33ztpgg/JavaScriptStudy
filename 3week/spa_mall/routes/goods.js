const express = require("express");
const router = express.Router();
const Cart = require("../schemas/cart.js")
const Goods = require("../schemas/goods.js");

 router.post("/goods/:goodsId/cart", async(req,res)=>{
  // const goodsId = req.params.goodsId;
  // const quantity = req.body.quantity;
  //파라미터에서 goodId를 가져오고 post형식이기에 body를 사용한ㄷ다
  const {goodsId} = req.params;
  const {quantity} = req.body;
  
  //장바구니에 이미 있는 정보인지 확인 하기위해 카트 정보를 가져온다
  const existCarts = await Cart.find({goodsId});

  //장바구니에 무언가 있었을 경우 실행
  if(existCarts.length) {
    return res.status(400).json({
      success:false,
      errorMessage:"이미 장바구니에 해당 제품이 존재합니다",
    })
  }

  await Cart.create({goodsId,quantity});
  
  res.json({result : "succes"});

 })


 router.put("/goods/:goodsId/cart", async(req,res)=>{
  const {goodsId} = req.params;
  const {quantity} = req.body;

  const existCarts = await Cart.find({goodsId});

  if(existCarts.length) {
    await Cart.updateOne(
      //goodsId에 해당하는 값이 있을 경우
      {goodsId: goodsId},
      //수정한다 quantity값을 quantity로 수저
      {$set:{quantity:quantity}}
    )
  }
  
  res.status(200).json({success:true});
})

router.delete("/goods/:goodsId/cart", async(req,res)=>{
  const {goodsId} = req.params;
  
  const existCarts = await Cart.find({goodsId});

  if(existCarts.length) {
    await Cart.deleteOne({goodsId})
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


// const Goods = require("../schemas/goods");
// router.post("/goods", async (req, res) => {
// 	const { goodsId, name, thumbnailUrl, category, price } = req.body;

//   const goods = await Goods.find({ goodsId });
//   if (goods.length) {
//     return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
//   }

//   const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

//   res.json({ goods: createdGoods });
// });








  router.get("/goods",(req,res) => { 
    //startus()  정보를 받을수 있다 
                          //key와 value이름이 같을 경우 {goods} 하나로 요약 가능
    res.status(200).json({"goods":goods})


    
  });
  
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