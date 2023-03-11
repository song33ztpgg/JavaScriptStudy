const express = require("express");
const router = express.Router();

const Cart = require("../schemas/cart.js");
const Goods = require("../schemas/goods.js")

router.get("/carts", async (req, res) => {
   //모든값을 담는다     배열로 넘어온다,여러값을 가져온다(배열)
    const carts = await Cart.find({});

    
    //객체에서 goodsId값만 찾아 넣는다
    const goodsIds = carts.map((cart) => {
        return cart.goodsId;
    })
    
    console.log(goodsIds); 
    console.log(); 

    //Goods에 행당되는 모든 정보를 가지고 올건데 
    //만약 goodsId 변수 안에 존재하는 값일때에만 조회하라
    const goods = await Goods.find({ goodsId : goodsIds });
    console.log(goods);

    //results값에 
    const results = carts.map((cart) => {
        return {
            quantity: cart.quantity,
            goods: goods.find((item) => item.goodsId === cart.goodsId),
        }
    })

    res.json({
        "carts": results,
    })

})

module.exports = router;



