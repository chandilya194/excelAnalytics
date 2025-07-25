const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

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

exports.checkuser=async(req,res)=>{
    const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ error: "User not found." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid password." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}