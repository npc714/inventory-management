module.exports= function(io){

    const express=require("express");
    const router=express.Router();
    const {updateRecord}= require("../../modules/database");

    router.get("/logout/:staffId", async (req, res)=>{

        try{
            res.clearCookie('loggedIn',{
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
            });
            await updateRecord("users", {staffId: req.params.staffId}, {online: false});
            await updateRecord("users", {staffId: req.params.staffId}, {lastSeen: Date.now()});
            io.emit("activeStateChange");
            return res.status(200).json({message: `logout successful`})
        }catch(err){
            console.log(err);
            return res.status(500).json({message: `logout failed`})
        }

    });

    return router;

}