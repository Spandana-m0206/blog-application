const connectDB= require('../src/database');
const dotenv=require('dotenv');
const app=require("./app");


dotenv.config({
    path:"../.env"
})



connectDB().then(()=>{
    app.listen(4000,()=>{
        console.log(`listeniung through the port 4000`)
    })
    
})