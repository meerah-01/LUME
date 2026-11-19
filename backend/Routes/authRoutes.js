const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../Models/user");

const router = express.Router();

router.post ("/signup", async (req, res) => {
  
  try{
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
      return res.status(400).json({
        message: "Please provide all fields"
      });
    }

    const existingUser = await User.findOne({ email })
    
    if(existingUser) {
      return res.status(409).json({
        message: "Account already exist"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      name, 
      email, 
      password: hashedPassword
    })

    await newUser.save();

    res.status(201).json({
      message: "Account created successfully!"
    })

  }

  catch(error) {
    console.error("Signup Error", error)

    res.status(500).json({
      message: "Something went wrong"
    })
  }
});

module.exports = router;