const app = require("./app");
const dbConnect = require("./utils/dbConnect");
const dotenv=require("dotenv");
dotenv.config();


//connection
dbConnect();

//listener
const PORT=process.env.PORT||4999;
app.listen(PORT,()=>{
    console.log(`listening on :http://localhost:${PORT}`);
})