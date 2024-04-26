import React from 'react'

function Login() {
  return (
    <>
  <div className='flex justify-center' >
    
     

    <div className='mt-[60px]'>

    <div class="container" >
    <div class="drop">
      <div class="content">
       <h2>Login</h2>
       <form class="form">
        <div class="inputBox">
          <input type="text" placeholder="user-name" />
        </div>
        <div class="inputBox">
          <input type="password"  placeholder="password"/>
        </div>
        <div class="login" >
          <input type="submit" value="login"/>
        </div>
       </form>
      </div>
    </div>
  </div>
    </div>


<div class="signup">

     <input type="submit" value="sign up"/>

</div>



    </div>
    </>
  )
}

export default Login
