import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

import NoChatSelected from './NoChatSelected'
import useConversation from '../../zustand/useConversation'



function MessageContainer() {
    
   const {selectedConversation,setSelectedConversation}=useConversation();

   useEffect(()=>{

      setSelectedConversation(null);
   },[])

    
  return (
    <div className='md:min-w-[450px] flex flex-col'>
       {!selectedConversation ?(<NoChatSelected/>):
          (
           <>
           <div className='bg-slate-500 px-4 -py-2 mb-2'>
          <span className='label-text  text-black'>To : </span><span className='text-grey-900 font-bold text-white'>{selectedConversation.fullName}</span>

       </div>
       <Messages/>
       <MessageInput/>
           
           </>

          )
       }
    </div>
  )
}

export default MessageContainer


