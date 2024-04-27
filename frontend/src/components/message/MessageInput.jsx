import React from 'react'
import { LuSend } from "react-icons/lu";


function MessageInput() {
  return (
     <form action="" className='px-4 my-3 '>
        <div className='w-full relative'>
            <input type="text" className='border pr-9 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='send messages...' />
          <button type='submit' className=' absolute inset-y-0 end-0 flex items-center pe-3'> <LuSend /></button>
        </div>
     </form>
  )
}

export default MessageInput
