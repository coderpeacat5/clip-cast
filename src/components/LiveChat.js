import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch } from 'react-redux'

const LiveChat = () => {
    const dispatch = useDispatch();
        useEffect(() => {
            const i = setInterval(() => { }, 2000)
    
            return (() => clearInterval(i))
        }, [])

  return (
    <div className='h-[450px] p-4 rounded-lg border border-gray-400'>
        <h1 className='font-medium text-lg mb-4'>Live Chat</h1>
        <ChatMessage name="Gayatri Singh" message="Its amazing and wonderful" />
        <ChatMessage name="Gayatri Singh" message="Its amazing and wonderful" />
        <ChatMessage name="Gayatri Singh" message="Its amazing and wonderful" />
        <ChatMessage name="Gayatri Singh" message="Its amazing and wonderful" />
        <ChatMessage name="Gayatri Singh" message="Its amazing and wonderful" />
        <ChatMessage name="Gayatri Singh" message="Its amazing and wonderful" />
        <ChatMessage name="Gayatri Singh" message="Its amazing and wonderful" />
    </div>
  )
}

export default LiveChat