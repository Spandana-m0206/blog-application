const {default:mongoose}=require('mongoose');


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
        required:true,
        select:false
        
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

    
},{timestamps:true})
module.exports=mongoose.model("bl0gContent",dataModle);