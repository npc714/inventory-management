//modules
require("dotenv").config({ path: "./.env"});
const express=require ("express");
const cookieparser=require("cookie-parser");
const cors=require("cors");

//routes
const inventory=require("./routes/inventory");

const port=process.env.PORT;
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieparser());
app.use(cors({
    origin: [
        "localhost:57017", //vite server 
    ],
    credentials: true,
}));

//mounting the routes
app.use('/inventory', inventory);

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});



