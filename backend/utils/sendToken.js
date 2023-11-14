const dotenv=require("dotenv").config();
const jwt=require("jsonwebtoken");
const sendToken=(user,statusCode,res)=>{
  try{
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE});

    const options={
      expires:new Date(Date.now()+process.env.COOKIE_EXPIRE*24*60*60*1000),
      httpOnly:true
    }
  

      res
      .status(statusCode).cookie("token",token,options)
      .json({ success: true, user,token });

  }
  catch(err)
  {
    res.status(500).json({success:false,error:err.message})
  }
}

module.exports= sendToken;