import React from 'react'
import { TiMessages } from "react-icons/ti"

function NoChatSelected() {
  return (
   
        <div className='flex items-center justify-center w-full h-full'>
          <div className='px-4 text-center sm:text-lg md:text-xl text-grey-200 font-semibold flex flex-col items-center gap-2'>
               <p>Welcome 🥳 vishal </p>
               <p>select a chat to start conversation</p>
               <TiMessages className="text-3xl md:text-6xl text-center"/>
           
          </div>
        </div>
     
     
     
  )
}

export default NoChatSelected
