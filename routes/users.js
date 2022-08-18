import express from "express";
import { putUser,deleteUser,getUser,getAllUser } from "../controllers/users.js";
const router = express.Router();


//update
router.put("/:id",putUser);

//delete
router.delete("/:id",deleteUser);

//get
router.get("/:id",getUser);

//getAll
router.get("/",getAllUser);

export default router;