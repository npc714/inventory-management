//this file contains routes for CRUD processes

//required modules
const express=require("express");
const {
    addRecord, 
    listRecords,
    updateRecord,
    findRecord,
}=require("../modules/database");

const router=express.Router();

//to add inventory items
router.post('/add-item', async(req, res)=>{

    try{

        const existingItem=await findRecord("items", {sku: req.body.sku});

        let item={
            name: req.body.name,
            category: req.body.category,
            brand: req.body.brand,
            attributes: req.body.attributes,
            sku: req.body.sku,
            averageCostPrice: req.body.costPrice,
            sellingPrice: req.body.sellingPrice,
            batch: [
                {
                    batchId: "0",
                    quantity: req.body.quantity,
                    costPrice: req.body.costPrice,
                    addedAt: new Date().toISOString()
                }
            ],
            lastUpdated: new Date().toISOString(),
        }

        if(existingItem){
            let totalCost=0;
            let totalItems=0;
            let maxId=0;
            const batch=existingItem.batch;
            batch.forEach(x => {
                if(maxId<Number(x.batchId)) maxId=Number(x.batchId);
            });
            item.batch[0].batchId=String(maxId+1);
            batch.push(item.batch[0]);

            batch.forEach((x)=>{
                totalCost+=x.costPrice*x.quantity;
                totalItems+=x.quantity;
            });

            await updateRecord("items", {sku: req.body.sku}, {
                batch,
                averageCostPrice: parseFloat((totalCost / totalItems).toFixed(2)),
                lastUpdated: new Date().toISOString(),
            });
            return res.status(200).json({message: `successfully updated ${req.body.name} in items`});
        }

        await addRecord("items", item);
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


