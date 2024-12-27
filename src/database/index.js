const mongoose=require('mongoose');
//i have to establish connection
const estConnection=async ()=>{
    try{
       await  mongoose.connect("mongodb://localhost:27017/blogDb").then(()=>{
        console.log("established connection")
       })
       

    } catch(err){
        console.log(`error occured${err.message}`);
        throw err;
    }
}
module.exports=estConnection;
//google code
// const mongoose = require('mongoose');

// const estConnection = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Established connection to MongoDB");
//     } catch (err) {
//         console.error(`Error occurred while connecting to MongoDB: ${err.message}`);
//         throw err;
//     }
// 


