import React from 'react'


function SignUp() {
  return (
    // <div className='flex justify-center items-center min-h-100vh bg-red-600'>
    //   <div className='relative flex justify-center items-center w-350px h-350px '>jkjkjn</div>
    // </div>
    <>
     
  <div class="container">
    <div class="drop">
      <div class="content">
       <h2>sign up</h2>
       <form >
        <div class="inputBox">
          <input type="text" placeholder="full-name" />
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
    </>
  )
}

export default SignUp
