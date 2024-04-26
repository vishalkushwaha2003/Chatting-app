import React from 'react'


function SignUp() {
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
      <input type="password" placeholder="password" />
    </div>
    <div class="inputBox1">
      <input type="password"  placeholder="re-password"/>
    </div>
   
   </form>
  </div>
</div>
</div>
</div>
 
{/* passwor div end ********************************************************************/}



{/* signup div start*********************************************************************** */}

<div className='flex justify-center' >
    
     

    <div className='mt-[60px]'>

    <div class="container" >
    <div class="drop">
      <div class="content">
       <h2>Sign up</h2>
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

     <input type="submit" value="Login"/>

</div>



    </div>



  {/* signup div end******************************************************************* */}  




{/* gender div start***************************************************************** */}


 <div className='mr-[100px] mt-[200px]  '>

 <div class="signup" >

     <input type="submit" value="Male"/>

</div>

<div class="signup">

     <input type="submit" value="Female"/>

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
