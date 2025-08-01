const express = require("express");
const jwt = require("jsonwebtoken");
const { updateRecord } = require("../../modules/database");

const router = express.Router();

router.get("/logged-in", async (req, res) => {

    const loggedIn = req.cookies.loggedIn;

    try {

        if (!loggedIn) return res.status(403).json({ message: `not logged in` });
        const decoded = jwt.verify(loggedIn, process.env.JWT_SECRET);

        return res.status(200).json({
            message: `success`,
            authenticated: true,
            result: decoded,
        });

    } catch (err) {

        console.log(err);
        let staffId;

        try {
            const unverified = jwt.decode(loggedIn);
            staffId = unverified?.staffId;
        } catch (_) {
            staffId = null;
        }

        if (staffId) {
            await updateRecord("users", { staffId }, { online: false });
        }

        console.log(staffId);
        res.clearCookie("loggedIn", {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/",
        });

        return res.status(401).json({ message: "unauthorized" });
    }
});

module.exports = router;
