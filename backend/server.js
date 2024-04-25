
import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser"

import messageRoutes from "./routes/message.routes.js"
import cookieparser from "cookie-parser";

const app=express();

dotenv.config();



const PORT=process.env.PORT||5000;


app.use(express.json());
app.use(cookieparser());






app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)




app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`listen on port ${PORT}`)
})