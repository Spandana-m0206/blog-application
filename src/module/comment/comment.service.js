const {cmtModel}=require('./comment.model');

//create a comment

exports.createComment=async (author,content,blogId)=>{
    
    const newComment=await cmtModel.create({
        author,content,blogId
    })
    return newComment;
}
exports.getCommentById=async (commentId)=>{
    const commentObj=await cmtModel.findById({
        _id:commentId
    }).select("author content")
    return commentObj;
}
exports.getCommentByBlogId= async (blogId,page=1,limit=3)=>{
    const skip=(page-1)*limit
    const totalComments=await cmtModel.countDocuments();
    const comments= await cmtModel.find({
    blogId:blogId
    }).select("author content").skip(skip).limit(limit)
    return {
        commentSection:comments,
        totalComments:totalComments,
        totalPages:Math.ceil(totalComments/limit),
        page:page
    };
    
}
exports.updateComment=async (cmtId,data)=>{
    const updatedComment=await cmtModel.findByIdAndUpdate(cmtId,data,{new:true})
    return updatedComment
    
    
}

exports.deleteComment=async (cmtId)=>{
    cmtModel.findOneAndDelete({
        id:cmtId
    })
}
