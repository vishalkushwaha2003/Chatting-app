
import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";


import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import cookieparser from "cookie-parser";

import {app,server,io} from './soket/socket.js'

dotenv.config();



const PORT=process.env.PORT||5000;


app.use(express.json());
app.use(cookieparser());






app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)




server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`listen on port ${PORT}`)
})