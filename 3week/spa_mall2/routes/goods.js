const express = require("express");
const router = express.Router();
const Goods = require("../schemas/goods.js");
const Cart = require("../schemas/cart.js")

router.post("/goods/:goodsId/cart", async (req, res) => {
  //파라미터에서 goodId를 가져오고 post형식이기에 body를 사용한ㄷ다
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const existCarts = await Cart.find({ goodsId });

  if (existCarts.length) {
    return res.status(400).json({
      success: false,
      errorMessage: "이미 장바구니에 해당 제품이 존재합니다",
    })
  }

  await Cart.create({ goodsId, quantity });

  res.json({ result: "succes" });

})

/**
 * 
 * 붙이기
 * 
 * */
router.put("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const existCarts = await Cart.find({ goodsId });

  if (existCarts.length) {
    await Cart.updateOne(
      //goodsId에 해당하는 값이 있을 경우
      { goodsId: goodsId },
      //수정한다 quantity값을 quantity로 수저
      { $set: { quantity: quantity } }
    )
  }

  res.status(200).json({ success: true });
})



/**
 * 
 * 지우기
 * 
 * */
router.delete("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const existCarts = await Cart.find({ goodsId });
  if (existCarts.length) {
    await Cart.deleteOne({ goodsId })
  }
  res.json({ success: true });
})



router.post('/goods/', async (req, res) => {
  const { goodsId, name, thumbnailUrl, category, price } = req.body;
  const goods = await Goods.find({ goodsId });

  if (goods.length) {
    return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
  }

  const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });
  res.json({ goods: createdGoods });
})


router.get("/goods", async(req, res) => {
  const x = await Goods.find({});
  res.status(200).json({ "goods": x })
})


module.exports = router;


