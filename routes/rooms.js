import express from "express";
import { createRoom, putRoom, deleteRoom, getRoom, getAllRoom} from '../controllers/rooms.js'
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/:hotelid",verifyAdmin,createRoom);

//update
router.put("/:id",verifyAdmin,putRoom);

//delete
router.delete("/:hotelid/:id",verifyAdmin,deleteRoom);

//get
router.get("/:id",getRoom);

//getAll
router.get("/",getAllRoom);


export default router;