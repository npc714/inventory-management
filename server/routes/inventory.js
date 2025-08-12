//this file contains routes for CRUD processes

module.exports=function(io){

    
    //required modules
    const express=require("express");
    const {
        addRecord, 
        listRecords,
        updateRecord,
        findRecord,
    }=require("../modules/database");

    const router=express.Router();

    const {logSale}=require("../modules/fileStorage");

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
                totalQuantity: req.body.quantity,
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
                    totalQuantity: totalItems,
                    batch,
                    sellingPrice: req.body.sellingPrice,
                    averageCostPrice: parseFloat((totalCost / totalItems).toFixed(2)),
                    lastUpdated: new Date().toISOString(),
                });
                return res.status(200).json({message: `successfully updated ${req.body.name} in items`});
            }

            await addRecord("items", item);
            io.emit("itemAdded");
            return res.status(200).json({message: `successfully added ${req.body.name} to items`});
        }catch(err){
            console.log(err);
        }

    });

    //to list all items in the inventory
    router.get('/list-items', async(req, res)=>{

        try{

            const items=await listRecords("items");
            return res.status(200).json({message: "success", result: items});

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

    router.post('/process-sale', async(req, res)=>{

        try {
            
            for(const saleItem of req.body.saleItems){

                const item=await findRecord("items", {sku: saleItem.sku});
                let remaining=saleItem.quantity;
                
                for (const x of item.batch){

                    if(remaining<x.quantity){
                        x.quantity-=remaining;
                        break;
                    } else {
                        remaining-=x.quantity;
                        x.quantity=0;
                        continue;
                    }

                }

                item.totalQuantity-=saleItem.quantity;

                item.batch=item.batch.filter((batch)=>{
                    return batch.quantity!==0;
                });

                console.log(item);
                item.lastUpdated = new Date().toISOString();

                await updateRecord("items", { sku: item.sku }, {
                    batch: item.batch,
                    totalQuantity: item.totalQuantity,
                    lastUpdated: item.lastUpdated,
                });

                io.emit("itemAdded");

            }
            
            await logSale(req.body.saleLog);
            res.status(200).json({message: `success`});

        } catch (err) {
            console.log(err);
            res.status(500).json({message: `payment processing failed`});
        }

    });

    return router;


}

