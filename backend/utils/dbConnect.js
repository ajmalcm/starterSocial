const mongoose=require("mongoose");
const dotenv=require("dotenv");
// const app=require("../app");

dotenv.config();

const dbConnect=()=>{
    mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>console.log("successfully connected to mongodb"))
    .catch((err)=>{console.log(err)})
}

module.exports=dbConnect;