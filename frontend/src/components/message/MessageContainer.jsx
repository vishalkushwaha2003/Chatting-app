import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

import NoChatSelected from './NoChatSelected'



function MessageContainer() {
    
   const noChatSelected=false;

    
  return (
    <div className='md:min-w-[450px] flex flex-col'>
       {noChatSelected ?(<NoChatSelected/>):
          (
           <>
           <div className='bg-slate-500 px-4 -py-2 mb-2'>
          <span className='label-text'>To:</span><span className='text-grey-900 font-bold'>vishal</span>

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


