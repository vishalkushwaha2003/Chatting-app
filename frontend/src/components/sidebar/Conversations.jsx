import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

function Conversations() {
               
            const {loading,conversations}=useGetConversations();
            console.log(conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
       {conversations.map((conversation,idx)=>(
        <Conversation 
         key={conversation._id}
         conversation={conversation}
         lastIndex={conversation.length-1}
        />
       ))}
       {loading&&<span className='loading loading-spinner mx-auto'></span>}
    </div>
  )
}

export default Conversations
