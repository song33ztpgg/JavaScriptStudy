const express = require("express");
const router = express.Router();
const Posts = require("../schemas/post.js")
const Comment = require("../schemas/comment.js")

//★전체값 가져오기
router.get("/posts", async (req, res) => {

    const posts = await Posts.find();
    console.log(posts.userId);

    if (posts.length) {
        res.status(200).json({ "Posts": posts })
    } else {
        res.json({ message: "회원목록 조회 실패" });
    }

})

//★전체값 보여주기
router.post("/posts", async (req, res) => {
    //4개의 값을 body에서 받아온다
    const { user, password, title, content } = req.body;
    //날짜를 추가한다
    const date = new Date();
    //날짜 값을 넣어 db에 저장한다
    await Posts.create({ user, password, title, content, date });
    res.json({ message: "게시글을 작성하였습니다" });;
})

//★정해진 값 찾아오기
router.get("/posts/:post_id", async (req, res) => {
    const { post_id } = req.params;
    //모든값을 담는다     배열로 넘어온다,여러값을 가져온다(배열)
    const posts = await Posts.find({});
    
    //객체에서 user값만 찾아 넣는다
    const users = posts.map((post) => {
        return post.user;
    })

    //uesr배열에서 req값과 동일한 값의 위치를 찾아낸다 
    let count = -1;
    for (let i = 0; i < users.length; i++) {
        if (String(users[i]) === String(post_id)) {
            console.log("users[i] = " + users[i]);
        }
    }

    //count값이 변했을 경우 Posts에서 해당 위치 값을 찾아낸다
    if (count == -1) {
        res.json({ message: "회원상세조회 실패" });
    } else {
        const us = await Posts.find({ user: users[count] });
        res.json(us);
    }
})
//★정해진 값 삭제하기 미구현
router.delete("/posts/:user", async (req, res) => {
    const { user } = req.params;

    const existComment = await Posts.find({ user });

    if (existComment.length) {
        await Comment.deleteOne({ user })
        res.json({ success: true });
    } else {
        res.json("실패했습니다");
    }

})


module.exports = router;


