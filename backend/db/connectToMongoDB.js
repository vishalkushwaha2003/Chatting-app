import mongoose from "mongoose"

const connectToMongoDB=async()=>{
    try{
          await mongoose.connect(process.env.MONGO_DB_URL)
          console.log("successfully connected")
    }
    catch(error){
       console.log("connection is failed ",error.message)
    }
}
 
export default connectToMongoDB; 