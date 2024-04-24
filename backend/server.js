
import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import mongoose from "mongoose"
const {Schema} = mongoose;
const app=express();
const userShema = new Schema({
    "title" : {type : Number},
    "name" : {type: String}
})
dotenv.config();

const PORT=process.env.PORT||5000;

app.get("/",(req,res)=>{
    res.send("hii vishal kushwaha");
})




app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`listen on port ${PORT}`)
})