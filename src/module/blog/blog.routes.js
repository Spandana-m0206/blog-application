const {createBlog,getPostById,updatePost,deletePost, getAllPost}=require("./blog.controller");
const dataModel=require("./blog.model");
const express=require('express');
const router=express.Router();


 
 
//to get all the posts 
router.get("/",getAllPost)

router.post("/",createBlog);

router.get("/:id",getPostById);
router.put("/:id",updatePost);

router.delete("/:id",deletePost)

module.exports=router;
 