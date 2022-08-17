import express from "express";
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("this is rooms page");
});

export default router;