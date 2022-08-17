import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// to rigister a new User
export const register = async (req,res)=>{
try{
    const saltRounds = 10;
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
        const newUser = new User({
            name : req.body.userName,
            email : req.body.email,
            password : hash
         })
 await newUser.save()
 res.status(200).send("New user created sucessfully")
}
catch(err){
    res.status(500).json(err)
}
}

// to login
export const login = async (req,res)=>{
    try{
            const user = await User.findOne({name:req.body.userName})
            if(!user) res.send("No such user found!");
    const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
    if(!isPasswordCorrect) res.send("password doesn't match");
    
    const token = jwt.sign({id: user._id, isAdmin : user.isAdmin}, process.env.JWT)

    const { password , isAdmin , ...otherDetails} = user._doc;
     res.cookie("access_token",token,{
        httpOnly : true,
     }).status(200).json({otherDetails});
    }
    catch(err){
        res.status(500).json(err)
    }
    }