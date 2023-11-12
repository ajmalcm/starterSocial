const express=require("express");
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const fileUpload=require("express-fileupload");

// middlewares

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(fileUpload());

//mainRoutes




module.exports=app;
