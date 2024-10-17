import express from "express";
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file

import cors from "cors";
import morgan from "morgan";
import connect from "./config/databaseConfig.js";
import router from "./routes/route.js";

const app = express();
const port = 4000;


// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable("x-powered-by");


app.get("/",(req,res)=>{
    res.status(201).json("home page at localhost:4000");
});

// api routes */
app.use('/api', router);


connect().then(()=>{
    try {

        app.listen(port, ()=>{
            console.log("Server is running on port", port);
        })
        
    } catch (error) {
        console.log("cannot connect to the server");
    }
}).catch(error =>{
    console.log("Invalid database");
})

