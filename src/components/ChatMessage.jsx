import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center p-2'>
            <img className='w-6 h-6 rounded-full bg-white' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            <span className="font-semibold px-2 text-[#aaaaaa]">{name}</span>
            <span className='text-sm'>{message}</span>
        </div>
    )
}

export default ChatMessage
