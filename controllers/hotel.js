import Hotel from "../models/hotels.js"

export const postHotel = async (req,res)=>{
    try{
      const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set : req.body}, {new:true})
       res.status(200).json(updateHotel)
    }catch(err){
     res.status(500).json(err)
    }
};

export const putHotel = async (req,res)=>{
    try{
      const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set : req.body}, {new:true})
       res.status(200).json(updateHotel)
    }catch(err){
     res.status(500).json(err)
    }
};

export const deleteHotel = async(req,res)=>{
    try{
       await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Data has been deleted successfully")
     }catch(err){
      res.status(500).json(err)
     }
};

export const getHotel  = async(req,res)=>{
    try{
       const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
     }catch(err){
      res.status(500).json(err)
     }
};

export const getAllHotel = async(req,res)=>{
    try{
       const hotels = await Hotel.find()
        res.status(200).json(hotels)
     }catch(err){
      res.status(500).json(err)
     }
};