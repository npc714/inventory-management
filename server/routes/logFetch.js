const express=require("express");
const {getLogs}=require("../modules/fileStorage");

const router=express.Router();

router.get("/sales/:id", async(req, res)=>{
    
    try {

        const log=await getLogs("sales", new Date().toISOString().split("T")[0], req.params.id);
        res.status(200).json({message: "success", result: log});
        
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Failed to fetch logs"});
    }

});


router.get("/activity", async(req, res)=>{

    try {
        const log=await getLogs("activity", new Date().toISOString().split("T")[0]);
        res.status(200).json({message: "success", result: log});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Failed to fetch logs"});
    }

});


module.exports=router;