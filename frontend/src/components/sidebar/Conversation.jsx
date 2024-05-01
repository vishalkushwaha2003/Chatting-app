import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';


function Conversation({conversation,lastIndex}) {

    const {selectedConversation,setSelectedConversation}=useConversation();
       


      const isSelectedConversation=selectedConversation?._id===conversation._id;




       const {onlineUsers}=useSocketContext();
       const isOnline =onlineUsers.includes(conversation._id)





  return (
    <>
    <div className= {` flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelectedConversation?"bg-sky-500":""} `}
    
    onClick={()=>setSelectedConversation(conversation)}
    >

 <div className={`avatar ${isOnline?"online":""}`}>
    <div className='w-12 rounded-full'>
        <img src={conversation.profilePic} alt="user avatar" />
    </div>

 </div>

   <div className='flex flex-col flex-1'>
 <div className='flex gap-3 justify-between'>
  <p className='font-bold text-grey-200'>{conversation.fullName}</p>
  <span className='text-xl '> ❤️</span>
 </div>
   </div>
    </div>
    {!lastIndex&&<div className='divider my-0 py-0 h-1'/>}
    </>
  )
}

export default Conversation
