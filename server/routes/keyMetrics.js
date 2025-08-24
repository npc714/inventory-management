module.exports=function (io){

    const express = require("express");
    const {
        connect
    } = require("../modules/database");
    const router = express.Router();

    router.post("/metric", async (req, res) => {
        try {
            
            const db = await connect();
            const record = await db.collection("staffmetrics").findOne({ 
                date: req.body.date,
                staffId: req.body.staffId,
            });

            if (!record) {
                await db.collection("staffmetrics").insertOne(req.body);
            } else{

                await db.collection("staffmetrics").updateOne(
                    { 
                        date: req.body.date,
                        staffId: req.body.staffId,
                    },
                    {
                        $inc: {
                            totalRevenue: Number(req.body.totalRevenue || 0),
                            totalOrders: Number(req.body.totalOrders  || 0),
                        },
                    }
                );

            }

            io.emit("metricUpdated");
            return res.status(200).json({ message: "success" });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Server error" });
        }
    });

    router.get("/metric/:id/:date", async (req, res) => {

        try {

            const db=await connect();

            const start=new Date();
            const end=new Date();

            const formatDate=(d)=>{
                return d.toISOString().split("T")[0];
            }

            if(req.params.date==="week"){
                start.setDate(end.getDate()-6);
            } else if(req.params.date==="month"){
                start.setDate(end.getDate()-29);
            }else {
                const records=await db.collection("staffmetrics").findOne({ 
                    date: formatDate(new Date()),
                    staffId: req.params.id
                });
                return res.status(200).json({ message: "success", result: records });
            }

            const startDate=formatDate(start);
            const endDate=formatDate(end);

            const record=await db.collection("staffmetrics").aggregate([
                { $match: { date: { $gte: startDate, $lte: endDate } } },
                {    
                    $group: {
                        _id: null,
                        totalRevenue: { $sum: "$totalRevenue" },
                        totalOrders: { $sum: "$totalOrders" }
                    }
                }
            ]).toArray();

            return res.status(200).json({ message: "success", result: record });

        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Failed to fetch metrics" });
        }

    });

    router.get("/total-metric/:date", async(req, res)=>{
        try{

            const db=await connect();

            const start=new Date();
            const end=new Date();

            const formatDate=(d)=>{
                return d.toISOString().split("T")[0];
            }

            if(req.params.date==="week"){
                start.setDate(end.getDate()-6);
            } else if(req.params.date==="month"){
                start.setDate(end.getDate()-29);
            } else {
                const records=await db.collection("staffmetrics").aggregate([
                    { $match: { date: formatDate(new Date()) } },
                    {    
                        $group: {
                            _id: null,
                            totalRevenue: { $sum: "$totalRevenue" },
                            totalOrders: { $sum: "$totalOrders" }
                        }
                    }
                ]).toArray();
                return res.status(200).json({ message: "success", result: records });
            }

            const startDate=formatDate(start);
            const endDate=formatDate(end);
            const records=await db.collection("staffmetrics").aggregate([
                { $match: { date: { $gte: startDate, $lte: endDate } } },
                {
                    $group: {
                        _id: null,
                        totalRevenue: { $sum: "$totalRevenue" },
                        totalOrders: { $sum: "$totalOrders" }
                    }
                }
            ]).toArray();

            return res.status(200).json({ message: "success", result: records });

        }catch(err){
            console.log(err);
            return res.status(500).json({ message: "Failed to fetch metric" });
        }
    });

    return router;

}