//this route adds users (sales operators) to the database

const express=require("express");
const bcrypt=require("bcrypt")
const {addRecord, findRecord, deleteRecord, listRecords}=require("../../modules/database");

const router=express.Router();

router.post('/add-user', async(req, res)=>{

    try{

        const existingUser=await findRecord("users", {staffId: req.body.staffId});
        if(existingUser) return res.status(200).json({message: `User already exists`});

        const hashedPassword=await bcrypt.hash(req.body.password, 10);
        req.body.password=hashedPassword;
        req.body.online=false;
        req.body.lastSeen="";

        await addRecord("users", req.body);
        console.log(`user "${req.body.firstName}" added to users`);
        return res.status(200).json({message: `Successfully added ${req.body.firstName} as ${req.body.role} staff`});

    }catch(err){
        console.log(err);
        return res.status(500).json({message: `Server error`});
    }

});


router.get('/list-users', async(req, res)=>{

    try{

        const users=await listRecords("users");
        users.forEach((user)=>{
            delete user["password"];
        });

        res.status(200).json({
            message: `success`,
            result: users
        });

    }catch(err){
        console.log(err);
        return res.status(500).json({message: `server error`});
    }

});


router.delete('/remove-user', async(req, res)=>{

    try{

        await deleteRecord("users", req.body.filter);
        console.log(`Successfully removed user with filter: ${req.body.filter}`);
        res.status(200).json({message: "Successfully removed user"});

    }catch(err){
        console.log(err);
    }

});


module.exports=router;