const express = require("express");
const router = express.Router();
const Posts = require("../schemas/post.js");
const Comments = require("../schemas/comment.js");
const authMiddleware = require("../middlewares/auth-middleware");

//★게시글 작성
router.post("/posts", authMiddleware, async (req, res) => {
    const user = res.locals.user;
    const { title, content } = req.body;

    //날자추가
    const day = Date();
    await Posts.create(
        {
            userId: user._id,
            nickname: user.nickname,
            title,
            content,
            creatDay: day,
            updateDay: day
        });
    res.send("완료되었습니다");
});


// ★게시글 조회
router.get("/posts", async (req, res) => {
    // const user = res.locals.user;
    // const totalPosts = await Posts.find({ user });
    const totalPosts = await Posts.find({ });

        const results = totalPosts.map((value) => {
        return {
            userId: value.userId,
            nickname: value.nickname,
            title: value.title,
            creatDay: value.creatDay,
            updateDay: value.creatDay,
        }
    });

    res.json({ results });
});


//★게시글 상세 조회
router.get("/posts/:postId", authMiddleware, async (req, res) => {
    const { postId } = req.params
    const selectPosts = await Posts.findOne({ _id: postId });
    res.json({ "수정할 부분": selectPosts });
});


//★게시글 수정
router.put("/posts/:postId", authMiddleware, async (req, res) => {
    const { postId } = req.params;
    const { title, content } = req.body;

    const selectPosts = await Posts.findOne({ _id: postId });
    const day = Date();

    if (selectPosts) {
        await Posts.updateOne(
            { postId },
            { $set: { title: title, content: content, updateDay: day } }
        )
        return res.send("수정완료되었습니다");
    } else {
        return console.log("해당 값이 없습니다");
    }

});

//★게시글 삭제
router.delete("/posts/:postId", authMiddleware, async (req, res) => {
    const { postId } = req.params;

    const selectPosts = await Posts.findOne({ _id: postId });

    if (selectPosts) {
        await Posts.deleteOne({ _id: postId  });
    } else {
        res.json("존재하지 않는 ID 입니다");
    }

    res.json({ success: true });
})

//★댓글 생성
router.post("/posts/:postId/comments", authMiddleware, async (req, res) => {    
    const { postId } = req.params; 

    const selectPosts = await Posts.findOne({ _id : postId });
    console.log(selectPosts);
    if (selectPosts) {
    } else {
        return res.json("포스트 ID가 존재하지 않습니다")
    }

    const { comment } = req.body;
    const user = res.locals.user;

    const day = Date();
    await Comments.create(
        {
            postId: selectPosts._id,
            commentId : user._id,
            nickname: user.nickname,
            comment : comment,
            creatDay: day,
            updateDay: day
        });
    res.send("완료되었습니다");
});

//★댓글 목록 조회
router.get("/posts/:postId/comments", async (req, res) => {
    const { postId } = req.params; 
    const selectcComments = await Comments.find({ postId : postId });
    res.json({selectcComments});
});

//★댓글 수정		        
router.put("/posts/:postId/comments/:commentId", authMiddleware, async (req, res) => {

    const { postId,commentId} = req.params; 
    const {comment} = req.body;
    const selectcComments = await Comments.find({ commentId : commentId });
   

    const day = Date();

    if (selectcComments) {
        await Comments.updateOne(
            { commentId },
            { $set: { comment, updateDay: day } }
        )
        return res.send("수정완료되었습니다");
    } else {
        return console.log("해당 값이 없습니다");
    }


});

// ; 댓글 삭제		        /posts/:postId/comments/:commentId	    DELETE
router.delete("/posts/:postId/comments/:commentId", authMiddleware, async (req, res) => {

    const { postId,commentId} = req.params; 
    const selectcComments = await Comments.find({ commentId : commentId });

    if (selectcComments) {
        await Comments.deleteOne({ commentId });
        return res.send("삭제되었습니다");
    } else {
        res.json("존재하지 않는 ID 입니다");
    }


});
module.exports = router;