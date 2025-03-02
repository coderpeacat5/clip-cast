import React from 'react'



const Button = ({name}) => {
  return (
    <button className='text-white text-sm font-medium hover:bg-[#1e1f1f] bg-[#2d2e2e] mr-3 px-3 py-1 rounded-lg cursor-pointer whitespace-nowrap overflow-hidden'>{name}</button>
  )
}

export default Button