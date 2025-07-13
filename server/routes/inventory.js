const express=require("express");
const {
    addRecord, 
    listRecords,
    updateRecord,
}=require("../modules/database");

const router=express.Router();


router.post('/add-item', async(req, res)=>{

    try{
        await addRecord("items", req.body);
        res.json({message: `successfully added ${req.body.name} to items`});
    }catch(err){
        console.log(err);
    }

});

router.get('/list-items', async(req, res)=>{

    try{

        const items=await listRecords("items");
        res.json({items});

    } catch(err){
        console.log(err);
    }

});

router.put('/update-item', async(req, res)=>{

    try{

        await updateRecord("items", req.body.filter, req.body.update);
        res.json({message: `Successfully updated items`});

    } catch(err){
        console.log(err);
    }

});



module.exports=router;


