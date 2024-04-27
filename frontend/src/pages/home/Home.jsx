import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import MessageContainer from '../../components/message/MessageContainer'

function Home() {
  return (
    
      <div className='pt-[40px] w-full h-full bg-cover'>
        <div className='flex  sm:h-[450px] md:h-[550px] border-[0.3px] border-x-indigo-500 border-y-black w-[756px] mx-auto  rounded-xl overflow-hidden bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' >
      <SideBar/>
      <MessageContainer/>
    </div>
       </div>
    
  )
}

export default Home
