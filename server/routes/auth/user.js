//this route adds users (sales operators) to the database

const express=require("express");
const bcrypt=require("bcrypt")
const {addRecord, findRecord, deleteRecord}=require("../../modules/database");

const router=express.Router();

router.post('/add-user', async(req, res)=>{

    try{

        const existingUser=await findRecord("users", {userId: req.body.userId});
        if(existingUser) return res.status(200).json({message: `User already exists`});

        const hashedPassword=await bcrypt.hash(req.body.password, 10);
        req.body.password=hashedPassword;

        await addRecord("users", req.body);
        console.log(`user "${req.body.firstName}" added to users`);
        return res.status(200).json({message: `Successfully added ${req.body.firstName} to users`});

    }catch(err){
        console.log(err);
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