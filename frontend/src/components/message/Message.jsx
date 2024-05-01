import React from 'react'
import { useAuthContext } from '../../context/AuthContext.jsx'
import  useConversation from '../../zustand/useConversation.js'
import { extractTime } from '../../assets/utils/extractTime.js';

function Message({message}) {

                  const{authUser}=useAuthContext();
                  const{selectedConversation}=useConversation();

                  const fromMe=message.senderId===authUser._id;
                 
                  const chatClassName=fromMe?'chat-end':'chat-start';
                  const profilePic=fromMe?authUser.profilePic:selectedConversation?.profilePic;
                  const bubbleBgColor=fromMe?"bg-blue-500":"";


                  const trueshake=message.shake;
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
           <div className='w-8 rounded-full'>
            <img src={profilePic} alt="tailwind css chat bubble component" />

           </div>
        </div>
         <div className={`chat-bubble text-black ${trueshake?"shake":""} ${fromMe?bubbleBgColor:"bg-fuchsia-300"} `}>
                  {message.message}
         </div>
         <div className='chat-footer opecity-50 text-xs flex gap-1 item-center text-black'>{extractTime(message.createdAt)}</div>
    </div>
  )
}

export default Message
