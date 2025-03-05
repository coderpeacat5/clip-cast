import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import {addMessage} from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("")

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages )

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(30),
        })
      );
    }, 2000);

  return (() => clearInterval(i))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

return (
  <div className='h-[450px] rounded-lg border border-gray-400 overflow-y-scroll'>
    <h1 className='font-medium text-lg mb-4 p-4 '>Live Chat</h1>
    <div className='flex flex-col-reverse p-4 pb-0'>
    {chatMessages.map((c, i) => (
      <ChatMessage key={i} name={c.name} message={c.message} />
    ))}
    </div>
    <form className='flex w-full border-t border-t-gray-500 py-2 px-3' onSubmit={(e) => {
      e.preventDefault()
      dispatch(addMessage({
        name:"Gayatri Singh",
        message : liveMessage,
      }))
      }}>
      <input 
      type='text text-gray-300 ' 
      placeholder='Chat..' 
      className='w-[80%] rounded-2xl p-1 px-2 focus:outline-none bg-[#1e1f1f]'
      value={liveMessage}
      onChange={(e) => setLiveMessage(e.target.value)}/>
      <button className='ml-3 p-1 px-3 bg-[#1e1f1f] hover:bg-[#2d2e2e] rounded-md'>Send</button>
    </form>
  </div>
)
}

export default LiveChat