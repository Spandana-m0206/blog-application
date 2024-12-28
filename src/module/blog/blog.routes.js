const {createBlog,getPostById,updatePost,deletePost}=require("./blog.controller");
const dataModel=require("./blog.model");
const express=require('express');
const router=express.Router();


 
 
//to get all the posts 
router.get("/",async (req,res)=>{
    const allPosts=await dataModel.find();
    const allPostWithoutSecret=await dataModel.find().select("-secret")
    res.send(allPostWithoutSecret);

})

router.post("/",createBlog);

router.get("/:id",getPostById);
router.put("/:id",updatePost);

router.delete("/:id",deletePost)

module.exports=router;
 