import React, { useState } from 'react'
import {toast} from 'react-hot-toast'

const useSignUp = ()=> {
       const[loading,setLoading]=useState(false);

       const signup=async({fullName,userName,password,confirmPassword,gender})=>
       {
           const success=handleInputError({fullName,userName,password,confirmPassword,gender});
               
         if(!success)return;
            
        setLoading(true);

         try {
              
               const res =await fetch("/api/auth/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
               }) 

               const data =await res.json();
               console.log(data);

         } catch (error) {
             toast.error("hiii")
         }
         finally{
            setLoading(false);
         }
     }
      return {loading,signup}
}

export default useSignUp



const handleInputError=({fullName,userName,password,confirmPassword,gender})=>{
    if(!fullName|| !userName||!password|| !confirmPassword|| !gender){
        
        toast.error("fill all the field")
        return false;
    }
    if(password!=confirmPassword){
        toast.error("password don't match")
        return false;
              
    } 

    if(password.length<6)
    {
        toast.error("password length must be atleast 6")
        return false;
    }
  
    return true;
}