import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from './messageSkeleton';


function Messages() {
        const {loading,messages}= useGetMessages();
         

         const lastMessageRef=useRef();

        useEffect(()=>{

              setTimeout(()=>{
                lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
              },100)

        },[messages]);
       
      
  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading && messages.length>0 && messages.map((m,idx)=>(<div  key={m._id} ref={lastMessageRef}>
        <Message    message={m}/>
        </div>))}
    {loading&&[...Array(5)].map((_,idx)=><MessageSkeleton key={idx}/>)}
     
      
      {!loading&&messages.length==0&&(
        <p className='text-center '>Send the message to start the conversation</p>
      )}
      
      
      
    </div>
  )
}

export default Messages
