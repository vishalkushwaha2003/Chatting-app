import React from 'react'
import { RiLogoutCircleRLine } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';


function LogoutButton() {

    const{loading,logout}=useLogout();

  return (
    <div className='mt-auto'>
      {!loading?<RiLogoutCircleRLine className='w-6 h-6 text-white cursor-pointer' 
         
         onClick={logout}

      />:(
        <span className='loading loading-spinner'></span>
      )}

    </div>
  )
}

export default LogoutButton
