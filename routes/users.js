import express from "express";
import { putUser,deleteUser,getUser,getAllUser } from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkAuthentication",verifyToken,(req,res)=>{
    res.send("hello user! you are logged in");
});

router.get("/checkUser/:id",verifyUser,(req,res)=>{
    res.send("hello user! you are logged in and you can delete your account");
});

router.get("/checkAdmin/:id",verifyAdmin,(req,res)=>{
    res.send("hello user! you are logged in and you can delete all account");
});

//update
router.put("/:id",putUser);

//delete
router.delete("/:id",deleteUser);

//get
router.get("/:id",getUser);

//getAll
router.get("/",getAllUser);

export default router;