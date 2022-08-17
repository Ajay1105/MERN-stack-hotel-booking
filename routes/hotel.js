import express from "express";
import Hotel from "../models/hotels.js"
import { postHotel, putHotel, deleteHotel, getHotel, getAllHotel} from '../controllers/hotel.js'
const router = express.Router();

//create
router.post("/",postHotel);

//update
router.put("/:id",putHotel);

//delete
router.delete("/:id",deleteHotel);

//get
router.get("/:id",getHotel);

//getAll
router.get("/",getAllHotel);

export default router;