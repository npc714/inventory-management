//this route adds users (sales operators) to the database

const express=require("express");
const bcrypt=require("bcrypt")
const {addRecord, findRecord, deleteRecord, listRecords}=require("../../modules/database");
const {logActivity}=require("../../modules/fileStorage");

const router=express.Router();

router.post('/add-user', async(req, res)=>{

    try{

        const existingUser=await findRecord("users", {staffId: req.body.staff.staffId});
        if(existingUser) return res.status(200).json({message: `User already exists`});

        const hashedPassword=await bcrypt.hash(req.body.staff.password, 10);
        req.body.staff.password=hashedPassword;
        req.body.staff.online=false;
        req.body.staff.lastSeen="";

        await addRecord("users", req.body.staff);
        await logActivity(req.body.log);
        console.log(`user "${req.body.staff.firstName}" added to users`);
        return res.status(200).json({message: `Successfully added ${req.body.staff.firstName} as ${req.body.staff.role} staff`});

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


/*router.delete('/remove-user', async(req, res)=>{

    try{

        await deleteRecord("users", req.body.filter);
        console.log(`Successfully removed user with filter: ${req.body.filter}`);
        res.status(200).json({message: "Successfully removed user"});

    }catch(err){
        console.log(err);
    }

});*/


module.exports=router;