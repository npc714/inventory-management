//this route logs in users to the website

module.exports=function (io){

    const express=require("express");
    const jwt=require("jsonwebtoken");
    const bcrypt=require("bcrypt");
    const {findRecord, updateRecord}=require("../../modules/database");

    const router=express.Router();

    router.post('/login', async(req, res)=>{

        try{

            const user=await findRecord("users", {staffId: req.body.staffId});
            if(!user||(user&&req.body.role!==user.role)) return res.status(404).json({message: `user not found`});
            if(user.online) return res.status(403).json({message: `user active on another device / browser`});
            const match=await bcrypt.compare(req.body.password, user.password);
            if(!match) return res.status(403).json({message: `incorrect password`});

            const payload={
                firstName: user.firstName,
                lastName: user.lastName,
                staffId: user.staffId,
                role: user.role,
            }
            
            const token=jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "24h"
            });

            res.cookie('loggedIn', token,{
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
            });

            await updateRecord("users", {staffId: user.staffId}, {online: true});
            io.emit("activeStateChange");

            return res.status(200).json({
                message: `log in successful`,
                result: {
                    staffId: user.staffId
                }
            });

        }catch(err){
            return res.status(500).json({message: `server error`});
        }

    });

    return router;

}