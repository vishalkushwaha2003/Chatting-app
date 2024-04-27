import React from 'react'

function Message() {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
           <div className='w-8 rounded-full'>
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="tailwind css chat bubble component" />

           </div>
        </div>
         <div className='chat-bubble text-white bg-blue-500'>
                   Hi! guys what's upp?
         </div>
         <div className='chat-footer opecity-50 text-xs flex gap-1 item-center'>12:40</div>
    </div>
  )
}

export default Message
