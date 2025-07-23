//this file contains routes for CRUD processes

//required modules
const express=require("express");
const {
    addRecord, 
    listRecords,
    updateRecord,
}=require("../modules/database");

const router=express.Router();

//to add inventory items
router.post('/add-item', async(req, res)=>{

    try{
        await addRecord("items", req.body);
        return res.status(200).json({message: `successfully added ${req.body.name} to items`});
    }catch(err){
        console.log(err);
    }

});

//to list all items in the inventory
router.get('/list-items', async(req, res)=>{

    try{

        const items=await listRecords("items");
        return res.status(200).json({items});

    } catch(err){
        console.log(err);
    }

});

//to update properties of inventory items
router.put('/update-item', async(req, res)=>{

    try{

        await updateRecord("items", req.body.filter, req.body.update);
        return res.status(200).json({message: `Successfully updated items`});

    } catch(err){
        console.log(err);
    }

});



module.exports=router;


