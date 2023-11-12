const mongoose=require("mongoose");
const validator=require("validator")
const userModel=new mongoose.Schema({

    firstName:{
        type:String,
        min:[2,"firstname can't be less than 2 characters"],
        max:[50,"firstname can't be more than 50 characters"],
        required:[true,"firstName cannot be empty"]
    },
    lastName:{
        type:String,
        min:[2,"lastname can't be less than 2 characters"],
        max:[50,"lastname can't be more than 50 characters"],
        required:[true,"lastName cannot be empty"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email cannot be empty"],
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Password cannot be empty"],
        min:[5,"Password cannot be less than 5 characters"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            typr:String,
            required:true
        }
    },
    friends:{
        type:Array,
        default:[]
    },
    loactions:String,
    occupation:String,
    viewedProfile:Number,
    impressions:Number,
},{timestamps:true})

module.exports=mongoose.model("User",userModel);