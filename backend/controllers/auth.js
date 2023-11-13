const User = require("../models/userModel");
const bcrypt = require("bcrypt");

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

    res
      .status(201)
      .json({ success: true, message: "Registered successfully", newUser });
  } catch (err) {
    res.status(501).json({ error: err.message });
  }
};
