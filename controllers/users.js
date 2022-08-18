import User from "../models/users.js"

export const putUser = async (req,res)=>{
    try{
      const updateUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body}, {new:true})
       res.status(200).json(updateUser)
    }catch(err){
     res.status(500).json(err)
    }
};

export const deleteUser = async(req,res)=>{
    try{
       await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Data has been deleted successfully")
     }catch(err){
      res.status(500).json(err)
     }
};

export const getUser  = async(req,res)=>{
    try{
       const user = await User.findById(req.params.id)
        res.status(200).json(user)
     }catch(err){
      res.status(500).json(err)
     }
};

export const getAllUser = async(req,res)=>{
    try{
       const users = await User.find()
        res.status(200).json(users)
     }catch(err){
      res.status(500).json(err)
     }
};