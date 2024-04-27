import React from 'react'
import { FiSearch } from "react-icons/fi";

function SearchInput() {
  return (
    <form action="" className='flex items-center gap-2'>

        <input type="text" placeholder="Search.." className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <FiSearch />
        </button>
    </form>
  )
}

export default SearchInput
