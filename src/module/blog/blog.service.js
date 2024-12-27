//here i interact with database 
//all crude operATION I PERFORM 
const dataModel=require('./blog.model');

//creating blog
exports.creatBlog=async (title,composition,author,secret,tags)=>{
   const newBlog=await dataModel.create({
    title,
    composition,
    author,
    secret,
    tags


   })
   return newBlog;
}

//get id
exports.getPost=async (blogId)=>{
    const post =await dataModel.findById(blogId);
    return post;

}
//update a post
exports.updatePostById=async (blogId)=>{
    const post=await dataModel.updateMany(blogId);
    return post;
}
exports.deletePostById=async (blogId)=>{
    const post=await dataModel.findOneAndDelete({
        id:blogId
    })
}
