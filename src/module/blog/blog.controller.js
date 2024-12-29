const {creatBlog,getPost,updatePostById,deletePostById, getPostWithoutSecret, allPostRequest}=require('./blog.service');
const bcrypt=require('bcrypt');


// i control all the intake and res of database
//i check all condition and set the status 
exports.createBlog = async (req,res)=>{
    //destructuring
    // const {title,composition,author,image,secret,tags}=req?.body ||{}
    const blogData=req?.body||{}
    if(!blogData.title){
       return  res.status(400).json({
        message:"title is required"
       })
    }
    if(!blogData.author){
        return res.status(400).json({
            message:"author name is missing"
        })
    }
    if(!blogData.composition){
        return res.status(400).json({
            message:"please compose "
        })
    }
    if(!blogData.secret){
        return res.status(400).json({
            message:"enter ur password"
        })
    }
    
    if(!blogData.image){
        return res.status(400).json({
            message:"image not found"
        })
    }
    //before creating a blog ensure u encrypt the secret by bcryt
    const encrypt=await bcrypt.hash(blogData.secret,5);
    blogData.secret=encrypt;
    const newBlog=await creatBlog(blogData)
    res.status(200).json({
        success:true,
        message:"this is a blog api",
        data:newBlog
    })
}


exports.getAllPost=async (req,res)=>{
    const input=req.query;
    if(!input.page){
        input.page="1"
    }
    if(!input.limit){
        input.limit="1"
    }
    if(!input.search){
        input.search=""
    }

    

    const allPost=await allPostRequest(parseInt(input.page),parseInt(input.limit),input.search);
    res.status(200).json({
        success:true,
        data:allPost

    })

}

exports.getPostById=async (req,res)=>{
    const postId=req.params.id;
    const post=await getPost(postId);
    const postWithoutSecret=await getPostWithoutSecret(postId)
    if(!post){
        res.status(404).json({
            message:"Post Not Found"
        })
    }
    res.status(230).json({
        success:true,
        message:"Result Of Your Search",
        data:postWithoutSecret
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
    const {title,composition,author,secret,image,tags}=req?.body ||{}
    if(!title){
       return  res.status(400).json({
        message:"title is required"
       })
    }
    if(!author){
        return res.status(404).json({
            message:"author name is missing"
        })
    }
    if(!composition){
        return res.status(404).json({
            message:"please compose"
        })
    }
    if(!secret){
        return res.status(404).json({
            message:"enter ur password"
        })
    }
    if(!image){
        return res.status(404).json({
            message:"image"
        })
    }
    //secret is what i provide in body which is being compared to post.secret (encrypted)
    
    
   if(!await bcrypt.compare(req.body.secret,post.secret)){
    return res.status(401).json({
        message:"unAuthorised user"
    })

   }
//    req.body.secret is raw need to encrypyt
const encryptMsg=await bcrypt.hash(req.body.secret,5)
req.body.secret=encryptMsg;
    const updatedPost=await updatePostById(postId,req.body);
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
       return res.status(404).json({
            message:"Post Not Found"
        })
    }
    if(!await bcrypt.compare(req.body.secret ,post.secret)){
        return res.status(404).json({
            message:"unauthorised user"
        })
    }
    const deletedPost=await deletePostById(postId);
    res.status(200).json({
        success:true,
        message:"deleted successfully",
        data:deletedPost
    })
}
