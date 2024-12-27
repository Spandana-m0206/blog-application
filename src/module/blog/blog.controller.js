const {creatBlog,getPost,updatePostById,deletePostById}=require('./blog.service');
const bcrypt=require('bcrypt');


// i control all the intake and res of database
//i check all condition and set the status 
exports.createBlog = async (req,res)=>{
    //destructuring
    const {title,composition,author,secret,tags}=req.body;
    if(!title){
       return  res.status(400).json({
        message:"title is required"
       })
    }
    if(!author){
        return res.status.json({
            message:"author name is missing"
        })
    }
    if(!composition){
        return res.status.json({
            message:"please compose "
        })
    }
    if(!secret){
        return res.status.json({
            message:"enter ur password"
        })
    }
    //before creating a blog ensure u encrypt the secret by bcryt
    const encrypt=await bcrypt.hash(secret,5);
    const newBlog=await creatBlog(title,composition,author,secret,tags)
    res.status(200).json({
        success:true,
        message:"this is a blog api",
        data:newBlog
    })
}

exports.getPostById=async (req,res)=>{
    const postId=req.params.id;
    const post=await getPost(postId);
    if(!post){
        res.status(404).json({
            message:"Post Not Found"
        })
    }
    res.status(230).json({
        success:true,
        message:"Result Of Your Search",
        data:post
    })

}
exports.updatePost=async (req,res)=>{
    const postId=req.params.id;
    const post=await getPost(postId);
    if(!post){
        res.status(404).json({
            message:"Post Not Found"
        })
    }
    const updatedPost=await updatePostById(postId);
    res.status(200).json({
        success:true,
        message:"updated successfully",
        data:updatedPost
    })

}
exports.deletePost=async (req,res)=>{
    const postId=req.params.id;
    const post=await getPost(postId);
    if(!post){
        res.status(404).json({
            message:"Post Not Found"
        })
    }
    const deletedPost=await deletePostById(postId);
    res.status(200).json({
        success:true,
        message:"deleted successfully",
        data:deletedPost
    })
}
