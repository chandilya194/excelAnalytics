const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const User = new mongoose.Schema({
    username:String,
    email:String,
    password:String
    
})

User.pre('save',async function(next){
    this.password= await bcrypt.hash(this.password,10);
    next();
})

module.exports=mongoose.model("users",User)