//here i interact with database 
//all crude operATION I PERFORM 
const dataModel=require('./blog.model');

//creating blog
//service is all independent of req and res 
//its all about buisness logic
exports.creatBlog=async (blogData)=>{
//    const newBlog=await dataModel.create({
//     // title,
//     // composition,
//     // author,
//     // image,
//     // secret,
//     // tags
    


//    })
// const blogdata={
//         title,
//         composition,
//         author,
//         image,
//         secret,
//         tags
//       }
const newBlog=await dataModel.create(blogData)
   return newBlog;
}

//get id
exports.getPost=async (blogId)=>{
    const post =await dataModel.findById(blogId).select("+secret");
    return post;

}
exports.getPostWithoutSecret=async (blogId)=>{
    const post =await dataModel.findById(blogId).select("-secret -image");
    return post;

}
//update a post
exports.updatePostById=async (blogId,data)=>{
    //{new:true}=> gives the data after updating
    const post=await dataModel.findByIdAndUpdate(blogId,data,{new:true});
    return post;
}
exports.deletePostById=async (blogId)=>{
    const post=await dataModel.findOneAndDelete({
        _id:blogId
    }).select("title author")
    return post;
}
