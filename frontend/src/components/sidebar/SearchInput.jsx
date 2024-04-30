import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast';
import useConversation from '../../zustand/useConversation'

function SearchInput() {

        const [search,setSearch]=useState("");
        const{conversations}=useGetConversations();
        const {setSelectedConversation}=useConversation();
        console.log(search)
       const handleSubmit=(e)=>{
        e.preventDefault();
        if(!search)return;
        
        const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
              
        if(conversation){
          setSelectedConversation(conversation);
          setSearch('');
        }
        else{
          toast.error("user not exist")
        }
       }


  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>

        <input type="text" placeholder="Search..." className='input input-bordered rounded-full'
        
          value={search}  onChange={(e)=>setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle bg-transparent text-black hover:text-white '>
        <FiSearch className='w-[30px]'/>
        </button>
    </form>
  )
}

export default SearchInput
