const User = require("../models/users");

exports.createuser=async(req,res)=>{
    const {email}= req.body;
    const checkuser = await User.findOne({email})
    if(checkuser){
        return res.status(409).json({error:"User alreeady exist"})
    }
    const user = new User(req.body)
    await user.save()
    res.status(201).json("done")
    
}