import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignUp from '../../hooks/useSignup'


function SignUp() {

    const [inputs,setInputs]  = useState({
      fullName:'',
      userName:'',
      password:'',
      confirmPassword:'',
      gender:'',
    })
    
      const {loading,signup}=useSignUp();

      

      const handleSubmit=async (e)=>{
          e.preventDefault();
           await signup(inputs);
           console.log(inputs)
          
      }


    


  return (
    // <div className='flex justify-center items-center min-h-100vh bg-red-600'>
    //   <div className='relative flex justify-center items-center w-350px h-350px '>jkjkjn</div>
    // </div>
    <>

 <div className='flex  gap-[20px]'>



{/* password div start*****************************************************************/}
<div className='ml-[250px] mt-[250px]' >

<div class="container">
<div class="drop1" >
  <div class="content1">
   
   <form class="form1" >
    <div class="inputBox1">
      <input type="password" placeholder="password" value={inputs.password} onChange={(e)=>setInputs({...inputs, password: e.target.value})}/>
    </div>
    <div class="inputBox1">
      <input type="password"  placeholder="re-password" value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}/>
    </div>
   
   </form>
  </div>
</div>
</div>
</div>
 
{/* password div end ********************************************************************/}



{/* signup div start*********************************************************************** */}

<div className='flex ' >
    
     

    <div className='mt-[60px]'>

    <div class="container" >
    <div class="drop">
      <div class="content">
       <h2>Sign up</h2>
       <form class="form" onSubmit={handleSubmit}>
        <div class="inputBox">
          <input type="text" placeholder="full-name" value={inputs.fullName} onChange={(e)=>setInputs({...inputs, fullName: e.target.value})}/>
        </div>
        <div class="inputBox">
          <input type="text"  placeholder="user-name" value={inputs.userName} onChange={(e)=>setInputs({...inputs,userName:e.target.value})}/>
        </div>
        <div class="login" >
          <input type="submit" value={loading?"   🧐":"submit"}/>
          
        </div>
       </form>
      </div>
    </div>
  </div>
    </div>


<div class="signup">

    <Link to={'/login'}><input type="text" value="Login"/> </Link> 

</div>



    </div>



  {/* signup div end******************************************************************* */}  




{/* gender div start***************************************************************** */}


 <div className='mr-[100px] mt-[200px]  '>

 <div class="signup" >

     <input type="submit" value="male" onClick={(e)=>setInputs({...inputs,gender:e.target.value})}/>
     

</div>

<div class="signup">

     <input type="submit" value="female" onClick={(e)=>setInputs({...inputs,gender:e.target.value})}/>

</div>



{/* <div class="container">
<div class="drop1" >
  <div class="content1">
   
   <form class="form1" >
    <div class="inputBox1">
      <input type="password" placeholder="password" />
    </div>
    <div class="inputBox1">
      <input type="password"  placeholder="re-password"/>
    </div>
   
   </form>
  </div>
</div>
</div> */}
</div>


{/* gender div end***************************************************************************** */}

    </div>
  

    </>
  )
}

export default SignUp
