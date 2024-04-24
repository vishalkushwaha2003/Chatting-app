import User from "../model/user.model.js"




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

          // const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
          // const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

          const newUser= new User({
            fullName,
            userName,
            password,
            gender,
            // profilePic:gender==="male"?boyProfilePic:girlProfilePic,
          })

          await newUser.save();

          res.status(201).json({
            msg: "successful"
          })
      }
      catch(error){
        console.log("error in sing up",error.message);
        res.status(500).json({error:"internal server error"})

      }
}
export const logout=(req,res)=>{
    res.send("logout page");
}