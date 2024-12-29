const {createComment,updateComment,deleteComment,getCommentByBlogId}=require("./comment.service");
const model=require('./comment.model')
const {getPostWithoutSecret}=require("../blog/blog.service")
//we check all details
exports.createNewComment=async (req,res)=>{
    const {author,content}=req?.body ||{}
    const {blogId}=req.params
    if(!author){
        return res.status(400).json({
            message:"user not found"
        })
    }
    if(!content){
        return res.status(400).json({
            message:"share your opinion"
        })
    }
    if(!blogId){
        return res.status(400).json({
            message:"postId not found"
        })
    }

    const post=await getPostWithoutSecret(blogId);
    if(!post){
        return res.status(400).json({
            message:"blog Not Found"
        })
    }
    const newComment=await createComment(author,content,blogId);

 


    res.status(201).json({
        data:{
            comment:newComment,
            blog:post
        },
        success:true,
        message:" comment created"

    })
}

exports.getCommentByPost=async (req,res)=>{
    let {blogId}=req.params;
    let {page,limit}=req.query;

    const post=await getPostWithoutSecret(blogId);
    if(!post){
        return res.status(400).json({
            message:"blog Not Found"
        })
    }
    if(!page){
        page="1"
    }
    if(!limit){
        limit="3"
    }
    const comments= await getCommentByBlogId(blogId,parseInt(page),parseInt(limit));

    res.status(200).json({
        success:true,
        message:"##COMMENT SECTION##",
        data:comments
 })
}

//get comment BY id
exports.getComment=async (req,res)=>{
    const commentId= req.params.id;
    const commentfound=await getCommentById(commentId)
    if(!commentfound){
        return res.status(400).json({
            message:"comment Not Found"
        })
    }
    res.status(201).json({
        success:true,
        message:"message Delivered",
        data:commentfound
    })
}


//update comment

exports.updateCmt=async (req,res)=>{
    const commentId=req.params.id;
    const comment=model.findById(commentId);
    if(!comment){
        return res.status(404).json({
            message:"CommentNotFound"
        })
        //.end()\
    }
    if(!req.body.author){
        return res.status(400).json({
            message:"author required"
        })
    }
    if(!req.body.content){
        return res.status(400).json({
            message:"content need to be present"
        })
    }
    if(!req.body.blogId){
        return res.status(400).json({
            message:"blogId missing"
        })
    }
    const updatedComment=await updateComment(commentId,req.body);
    res.status(200).json({
        successs:true,
        data:updateComment,

        message:"update successful"
    })


}
exports.dltCmt=async (req,res)=>{
    const commentId=req.params.id;
    const comment=model.findById(commentId);
    if(!comment){
        return res.status(404).json({
            message:"CommentNotFound"
        })
        //.end()\
    }
    const deletedComment=await deleteComment(commentId);
            res.status(200).json({
                success:true,
                message:"Successfully deleted",
                data:deletedComment
            })

}