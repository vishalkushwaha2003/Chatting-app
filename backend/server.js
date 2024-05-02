
import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import path from 'path'

import connectToMongoDB from "./db/connectToMongoDB.js";


import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import cookieparser from "cookie-parser";

import {app,server,io} from './soket/socket.js'


dotenv.config();

const __dirname=path.resolve();


const PORT=process.env.PORT||5000;

app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.use(express.json());
app.use(cookieparser());






app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)

app.get("*",(req,res)=>{
     
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));

})



server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`listen on port ${PORT}`)
})