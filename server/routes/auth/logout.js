module.exports= function(io){

    const express=require("express");
    const router=express.Router();
    const {updateRecord, findRecord}= require("../../modules/database");
    const {logActivity}=require("../../modules/fileStorage");

    router.get("/logout/:staffId", async (req, res)=>{

        try{
            res.clearCookie('loggedIn',{
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                path: "/",
            });
            const user=await findRecord("users", {staffId: req.params.staffId});
            await updateRecord("users", {staffId: req.params.staffId}, {
                online: false,
                lastSeen: Date.now(),
            });
            await logActivity({
                name: `${user.firstName} ${user.lastName}`,
                action: "logout",
                staffId: user.staffId,
                role: user.role,
            });
            io.emit("activeStateChange");
            io.emit("logUpdate");
            return res.status(200).json({message: `Logout successful`});
        }catch(err){
            console.log(err);
            return res.status(500).json({message: `Server error`});
        }

    });

    return router;

}