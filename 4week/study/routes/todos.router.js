const express = require("express");
const router = express.Router();
const Todo =require("../models/todo.js");

router.get("/", (req, res) => {
    res.send("hi");
}); 

router.post("/todos",async (req,res) => {
    const {value} = req.body;

    // -order 역순 오더(맨위것을 조회,내림차순) , exec 데이터를 조회
    const maxOrderByUserId = await Todo.findOne().sort("-order").exec();

    //값이 존재하면  +1 없으면 1 대입
    const order = maxOrderByUserId ? maxOrderByUserId.order + 1 : 1;

    //({value : value , order : oreder})와 같다
    const todo = new Todo({value, order}); 
    //테이블 추가
    await todo.save();

    res.send({todo})
})


router.get("/todos", async(req, res)=>{ 
    //Todo에서 order내림차순을 가져온다
    const todos = await Todo.find().sort("-order").exec();
    res.send({todos});
});

//★ up, down 버튼을 눌렀을 때 값 변경
router.patch("/todos/:todoId", async(req,res) =>{
    //버튼을 눌렀을 때 값을 받아온다
    const {todoId} = req.params; 
    const {order} = req.body;

    // todoId 값이 존재하는가 없으면 에러를 출력
    //findById :데이터 베이스에서 기본 재공하는 id 값을 찾는 메소드
    const currentTodo = await Todo.findById(todoId);

    //req.params로 받은 주소가 db에 없다면
    if(!currentTodo) {
        return res.status(400).json("존재하지 않는 값입니다");
    }

    //if(order) req.body로 들어오는 값을 모르기에
    if(order){ 
        //2
        const targetTodo = await Todo.findOne({order}).exec();
        //targetTodo(상위 값이 존재할경우)
        if(targetTodo){
            //하위값을 넣어준다
            targetTodo.order = currentTodo.order; 
            await targetTodo.save();
        } 
        //하위에 있던 값을 상위값으로 수정
        currentTodo.order = order; 
        await currentTodo.save();
    }

    res.send("");
});

module.exports = router;