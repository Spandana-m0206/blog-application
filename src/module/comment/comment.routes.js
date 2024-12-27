const model=require('./comment.model');
const {createNewComment,updateCmt,dltCmt}=require('./comment.controller');
const express=require('express');
const router=express.Router();
//read 
router.get('/',async ()=>{
    const allComments=await model.find();
    resizeBy.send(allComments);
})
//create
router.post('/create',createNewComment);
//update
router.put('/:id',updateCmt);
//delete
router.delete('/:id',dltCmt);



module.exports=router;


