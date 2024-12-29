const mongoose=require('mongoose');
 


const cmtSchema=new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    blogId:{type:mongoose.Schema.Types.ObjectId, ref:"dataModel",required:true},


},{timestamps:true});

exports.cmtModel=mongoose.model("commentModel",cmtSchema);

 //foreign key 
        //this blog field is a type mongoose obt id which is refering to the blog model