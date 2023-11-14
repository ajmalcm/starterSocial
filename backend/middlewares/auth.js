const jwt=require("jsonwebtoken");
const dotenv=require("dotenv").config();
const User=require("../models/userModel");
const isAuthenticatedUser=async (req,res,next)=>{

    try{
        const {token}=req.cookies;

        if(!token)
        return res.status(403).json({success:false,message:"Please login to access the resource"});

        const verifyToken=jwt.verify(token,process.env.JWT_SECRET);

        req.user=await User.findById(verifyToken.id);
        next();

    }
    catch(err)
    {
        res.status(403).json({success:false,error:err.message})
    }
}


module.exports=isAuthenticatedUser;