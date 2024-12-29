const {default:mongoose}=require('mongoose');
const commentModel=require('../comment/comment.model')


const dataModle= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    composition:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    secret:{
        type:String,
        required:true
   
        
    },
    image:{
        type:String,
        required:true
    },
    tags:[
      {
        type:String
      }
    ]
    // commentSection:[{
    //     type:mongoose.Schema.Types.ObjectId,ref:"commentModel"
    // }]


    
},{timestamps:true})
module.exports=mongoose.model("blogContent",dataModle);