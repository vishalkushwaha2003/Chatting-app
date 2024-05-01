import React, { useState } from 'react'
import { LuSend } from "react-icons/lu";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput=() =>{
                  const {loading,sendMessage}=useSendMessage();
                  const [message,setMessage]=useState("");
                      const handleSubmit=async (e)=>{

                      e.preventDefault();
                      if(!message)return;
                           await sendMessage(message);
                           setMessage("")

                    }

  return (
     <form action="" className='px-4 my-3 '  onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type="text" className='border pr-9 text-sm break-words rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='send messages...' value={message}  onChange={(e)=>setMessage(e.target.value)}/>
           <button type='submit' className=' absolute inset-y-0 end-0 flex items-center pe-3'>
            {loading?<span className='loading loading-spinner'></span>: <LuSend />}
           
           </button>
        </div>
     </form>
  )
}

export default MessageInput
