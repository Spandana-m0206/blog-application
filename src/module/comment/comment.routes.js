const model=require('./comment.model');
const {createNewComment,getComment,updateCmt,dltCmt, getCommentByPost}=require('./comment.controller');
const express=require('express');
const router=express.Router();
//read 
    router.get('/:blogId',getCommentByPost)
 
// router.get("/:id",getComment)
//create
router.post('/:blogId',createNewComment);
//update
router.put('/:id',updateCmt);
//delete
router.delete('/:id',dltCmt);



module.exports=router;


