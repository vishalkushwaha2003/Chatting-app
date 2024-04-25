import jwt from "jsonwebtoken"


const generateTokenAndSetCookie=(userId,res)=>{

    const token =jwt.sign({userId},process.env.secretKey,{expiresIn:'30d'})
    res.cookie("jwt",token,{
        maxAge:15*24*60*3600,
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.MOD!=="development",
    })

}

export default generateTokenAndSetCookie