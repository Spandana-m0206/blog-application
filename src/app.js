const express=require('express');
const app=express();
const routes=require('./module');


// app.use("/api",routes);
app.get('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"server is running"
    })
})
module.exports=app;



//crud operation 

