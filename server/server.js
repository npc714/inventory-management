//modules
require("dotenv").config({ path: "./.env" });
const http = require("http");
const express = require("express");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const { Server } = require("socket.io");
const { listRecords, updateRecord } = require("./modules/database");
const {logActivity}=require("./modules/fileStorage");

//routes
const user = require("./routes/auth/user");
const activePing=require("./routes/auth/activePing");
const logFetch=require("./routes/logFetch");

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(
    cors({
        origin: [
            process.env.FRONTEND_ORIGIN, //vite server
        ],
        credentials: true,
    })
);

//websocket setup and initialization
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_ORIGIN,
        credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

const login = require("./routes/auth/login")(io);
const loggedIn = require("./routes/auth/loggedIn")(io);
const logout = require("./routes/auth/logout")(io);
const inventory = require("./routes/inventory")(io);
const keyMetrics=require("./routes/keyMetrics")(io);

//mounting the routes
app.use("/inventory", inventory);
app.use("/auth/admin", user);
app.use("/auth", login);
app.use("/auth", loggedIn);
app.use("/auth", logout);
app.use("/auth", activePing);
app.use("/log-fetch", logFetch);
app.use("/key-metrics", keyMetrics);

//heartbeat ping to logout users
async function ping() {
    try {
        console.log("ping");
        const staff=await listRecords("users");

        for (const x of staff){

            if (x.online&&(Date.now()-x.lastSeen)>15000){

                console.log("i changed something!", x);
                await updateRecord("users", {staffId: x.staffId}, {
                    online: false,
                });
                await logActivity({
                    action: "logout",
                    name: `${x.firstName} ${x.lastName}`,
                    staffId: x.staffId,
                    role: x.role,
                });
                io.emit("activeStateChange");


            }

        }

    } catch (err) {
        console.log(err);
    }
}

setInterval(ping, 5000);

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

module.exports = { server, io };
