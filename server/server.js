//modules
require("dotenv").config({ path: "./.env" });
const http=require("http");
const express = require("express");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const { Server } = require("socket.io");

//routes
const inventory = require("./routes/inventory");
const user = require("./routes/auth/user");
const loggedIn = require("./routes/auth/loggedIn");

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
const logout = require("./routes/auth/logout")(io);

//mounting the routes
app.use("/inventory", inventory);
app.use("/auth/admin", user);
app.use("/auth", login);
app.use("/auth", loggedIn);
app.use("/auth", logout);

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});


module.exports={server, io};