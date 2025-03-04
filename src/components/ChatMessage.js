import React from 'react'
import { USER_ICON } from '../utils/constants'

const ChatMessage = ({ name, message }) => {

    return (
        <div className='flex items-center text-sm mb-3'>
            <img src={USER_ICON} className='w-7 invert' alt='user-icon' />
            <span className='mr-2 ml-1 text-gray-300 font-medium'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage