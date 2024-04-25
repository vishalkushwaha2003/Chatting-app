import User from "../model/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"




export const login=(req,res)=>{
    res.send("login page");
}
export const signup=async(req,res)=>{
      try{
          const {fullName,userName,password,confirmPassword,gender}=req.body;
          if(password!==confirmPassword){
             return res.status(400).json({error:"password don,t match"})
          }

          const user=await User.findOne({userName});

          if(user){
            return res.status(400).json({error:"user already exist"})
          }
          const salt=await bcrypt.genSalt(10);
          const hashPassword =await bcrypt.hash(password,salt)

          const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${userName}`
          const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${userName}`

          const newUser= new User({
            fullName,
            userName,
            password:hashPassword,
            gender,
            profilePic:gender==="male"?boyProfilePic:girlProfilePic,
          })
          if(newUser){

            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();

            res.status(201).json({
              _id:newUser._id,
              fullName:newUser.fullName,
              userName:newUser.userName,
              gender:newUser.gender,
            })
          }
          else res.status(400).json({error:"invalid user data"})
         
      }
      catch(error){
        console.log("error in sing up ,",error.message);
        res.status(500).json({error:"internal server error"})

      }
}
export const logout=(req,res)=>{
    res.send("logout page");
}