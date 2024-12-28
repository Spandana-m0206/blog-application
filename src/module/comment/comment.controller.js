const {createComment,updateComment,deleteComment}=require("./comment.service");
const model=require('./comment.model')
//we check all details
exports.createNewComment=async (req,res)=>{
    const {author,content}=req?.body ||{}
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
    const newComment=await createComment(author,content);
    res.status(400).json({
        data:newComment,
        success:true,
        message:" comment created"

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