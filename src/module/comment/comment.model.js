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
    blog:{
        //foreign key 
        //this blog field is a type mongoose obt id which is refering to the blog model
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"

    }
},{timestamps:true});

exports.cmtModel=mongoose.model("commentModel",cmtSchema);