import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("this is users page");
});

export default router;