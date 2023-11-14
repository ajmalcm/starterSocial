const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const dotenv=require("dotenv");
const sendToken=require("../utils/sendToken");
dotenv.config();

exports.register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      avatar,
      friends,
      location,
      occupation,
    } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist)
      return res.status(500).json({
        success: false,
        message: "User already exists with this emailId",
      });

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: passwordHash,
      avatar,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

      sendToken(newUser,201,res);


  } catch (err) {
    res.status(501).json({ error: err.stack });
  }
};

exports.login=async(req,res)=>{
  try{
    const {email,password}=req.body;

    const user=await User.findOne({email}).select("+password");

    if(!email || !password)
    return res.status(401).json({success:false,message:"Both email and password are required!"})

    if(!user)
    return res.status(404).json({success:false,message:"Invalid email or password"})

    const isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch)
    return res.status(404).json({success:false,message:"Invalid credentials"})

    sendToken(user,200,res);


  }
  catch(err)
  {
    res.status(500).json({error:err.stack})
  }
}
