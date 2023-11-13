const mongoose = require("mongoose");
const validator = require("validator");

const userModel = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstname cannot be empty"],
        min: [2, "firstname can't be less than 2 characters"],
        max: [50, "firstname can't be more than 50 characters"],
    },
    lastName: {
        type: String,
        required: [true, "lastName cannot be empty"],
        min: [2, "lastname can't be less than 2 characters"],
        max: [50, "lastname can't be more than 50 characters"],
    },
    email: {
        type: String,
        unique: true,
        max: 50,
        required: [true, "email cannot be empty"],
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Password cannot be empty"],
        min: [5, "Password cannot be less than 5 characters"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    friends: {
        type: Array,
        default: []
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
}, { timestamps: true });

module.exports = mongoose.model("User", userModel);
