import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';
import {toast} from 'react-hot-toast'

function useSendMessage() {
        const [loading,setLoading]=useState(false);
        const{selectedConversation,setMessages,messages}=useConversation();

        const sendMessage=async(message)=>{
                   
            setLoading(true);
            try {

                  const res =await fetch(`/api/message/send/${selectedConversation._id}`,{
                    method:"POST",
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({message}),
                  })
                    
                const data=await res.json();
               

                if(data.error){
                    throw new Error(data.error);
                }

                 await setMessages([...messages,data]);
                //    console.log(messages)
                  

            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(false)
            }





        }

        return {loading,sendMessage};
}

export default useSendMessage
