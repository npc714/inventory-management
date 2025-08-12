const express = require("express");
const { updateRecord, findRecord } = require("../../modules/database");
const router = express.Router();

router.get("/ping/:id", async (req, res) => {

    try{

        const staff = await updateRecord("users", {staffId: req.params.id}, {lastSeen: Date.now()});
        res.json({ success: true });

    }catch(err){
        console.log(err);
        res.status(500).json({ success: false, message: "Server error" });
    }


});

module.exports = router;
