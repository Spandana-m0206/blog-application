const model=require('./comment.model');

//create a comment
exports.createComment=async (author,content)=>{
    const newComment=await model.create({
        author,
        content

    })
    return newComment;
}
exports.updateComment=async (cmtId,data)=>{
    const updatedComment=await model.findByIdAndUpdate(cmtId,data,{new:true})
    return updatedComment
    
    
}

exports.deleteComment=async (cmtId)=>{
    model.findOneAndDelete({
        id:cmtId
    })
}
