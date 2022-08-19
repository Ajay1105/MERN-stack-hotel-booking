import express from "express";
import Hotel from "../models/hotels.js"
import { postHotel, putHotel, deleteHotel, getHotel, getAllHotel} from '../controllers/hotel.js'
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/",verifyAdmin,postHotel);

//update
router.put("/:id",verifyAdmin,putHotel);

//delete
router.delete("/:id",verifyAdmin,deleteHotel);

//get
router.get("/:id",getHotel);

//getAll
router.get("/",getAllHotel);

export default router;