const model=require('./comment.model');

//create a comment
exports.createComment=async (author,content)=>{
    const newComment=await model.create({
        author,
        content

    })
    return newComment;
}
exports.updateComment=async (cmtId)=>{
    model.update(cmtId)
    
}

exports.deleteComment=async (cmtId)=>{
    model.findOneAndDelete({
        id:cmtId
    })
}
