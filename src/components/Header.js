import React from 'react'
import { LOGO, SEARCH_ICON, SIDEBAR_ICON, USER_ICON } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col px-3 py-1 shadow-lg -z-10 bg-black'>
        <div className='col-span-1 flex justify-between items-center w-32'>
            <img src={SIDEBAR_ICON} alt='menu-icon' className='w-8 mr-1 cursor-pointer invert' onClick={()=> toggleMenuHandler()}/>
            <img src={LOGO} alt='logo' className='w-80' />
        </div>
        <div className='col-span-10 flex items-center ml-52'>
            <input placeholder='Search' className='bg-transparent text-white py-[7px] px-3 w-96 border border-gray-400 focus:outline-none rounded-l-full'></input>
            <button className='p-[7px] px-4 border border-gray-400 border-l-0 focus:outline-none rounded-r-full bg-[#2d2e2e] hover:bg-[#ffffff29]'><img src={SEARCH_ICON} alt='search' className='w-6 invert'/></button>
        </div>
        <div className='col-span-1 -mr-7 flex items-center'>
            <img src={USER_ICON} alt='user-icon' className='w-10 invert'/>
        </div>
    </div>
  )
}

export default Header