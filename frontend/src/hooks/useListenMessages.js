import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from '../zustand/useConversation'
import notification from '../assets/utils/sound/sound.wav'




const useListenMessages=()=>{

    const {socket}=useSocketContext();
    const {messages,setMessages}=useConversation();

    useEffect(()=>{

        socket?.on("newMessage",(newMessage)=>{

              newMessage.shake=true;
               setMessages([...messages,newMessage])
               const sound=new Audio(notification)
                sound.play();
        })
       
        return()=>socket?.off("newMessage")
    },[socket,setMessages,messages])

}

export default useListenMessages