const express=require('express')
const app=express();
const dotenv=require('dotenv')

dotenv.config();

const PORT=process.env.PORT||5000;

app.get("/",(req,res)=>{
    res.send("hii vishal kushwaha");
});

app.listen(PORT,()=>console.log(`listen on port ${PORT}`))