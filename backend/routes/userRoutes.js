const { register } = require("../controllers/auth");

const router=require("express").Router();

router.post("/register",register);

module.exports=router;