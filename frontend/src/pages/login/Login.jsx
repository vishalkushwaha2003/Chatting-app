import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

function Login() {

    const [inputs,setInputs]=useState({
      userName:'',
      password:'',
    })

    const {loading,login}=useLogin();
        
        const handleSubmit=(e)=>{
               e.preventDefault();
              login(inputs);
        }

  return (
    <>
    
  <div className='flex justify-center ' >
    
     

    <div className='mt-[60px]'>

    <div class="container" >
    <div class="drop">
      <div class="content">
       <h2>Login</h2>
       <form class="form" onSubmit={handleSubmit}>
        <div class="inputBox">
          <input type="text" placeholder="user-name" value={inputs.userName} onChange={(e)=>{setInputs({...inputs,userName:e.target.value})}}/>
        </div>
        <div class="inputBox">
          <input type="password"  placeholder="password" value={inputs.password} onChange={(e)=>{setInputs({...inputs,password:e.target.value})}}/>
        </div>
        <div class="login" >
          <input type="submit" value={!loading?"Login":"   🧐"}/>
        </div>
       </form>
      </div>
    </div>
  </div>
    </div>


<div class="signup">

    <Link to={'/signup'}> <input type="submit" value="sign up"/></Link>

</div>



    </div>
    </>
  )
}

export default Login
