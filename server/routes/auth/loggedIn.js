const express=require("express");
const jwt=require("jsonwebtoken");

const router=express.Router();

router.get('/logged-in', async (req, res)=>{

    try{

        const loggedIn=req.cookies.loggedIn;
        if(!loggedIn) return res.status(403).json({message: `not logged in`});
        const decoded=jwt.verify(loggedIn, process.env.JWT_SECRET);
        return res.status(200).json({
            message: `success`,
            authenticated: true,
            result: decoded
        });

    }catch(err){
        console.log(err);
        return res.status(401).json({message: `unauthorized`});
    }

});


module.exports=router;
