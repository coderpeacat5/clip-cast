import React, { useEffect, useState } from 'react'
import { LOGO, SEARCH_ICON, SIDEBAR_ICON, USER_ICON, YT_SEARCH_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false)

  const searchCache = useSelector((store) => store.search)
 
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  useEffect(() => {

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
    }, 1000)
      
    return(() => {
      clearTimeout(timer)
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  } ,[searchQuery])

  const getSearchSuggestions = async() => {
    const data = await fetch(YT_SEARCH_API + searchQuery)
    const json = await data.json()

    // console.log(json[1])
    setSuggestions(json[1])

    // update cache
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  }

  return (
    <div className='sticky z-20 top-0 grid grid-flow-col px-3 py-1 shadow-lg bg-black'>
        <div className='col-span-1 flex justify-between items-center w-32'>
            <img src={SIDEBAR_ICON} alt='menu-icon' className='w-8 mr-1 cursor-pointer invert' onClick={()=> toggleMenuHandler()}/>
            <img src={LOGO} alt='logo' className='w-80' />
        </div>
        <div className='col-span-10 ml-52'>
          <div className='flex items-center mt-3' >
            <input 
            placeholder='Search' 
            className='bg-transparent text-white py-[7px] px-3 w-96 border border-gray-400 focus:outline-none rounded-l-full'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)} />
            <button className='p-[6px] px-4 border border-gray-400 border-l-0 focus:outline-none rounded-r-full bg-[#2d2e2e] hover:bg-[#ffffff29]'><img src={SEARCH_ICON} alt='search' className='w-6 invert inline-block'/></button>
            </div>
            {showSuggestions && suggestions.length > 0 &&
              <ul className='text-white absolute bg-[#1e1f1f] px-4 py-2 w-[384px] rounded-md mt-1 ml-1 z-30'>
                {suggestions.map((suggestion) => <li key={suggestion} className='py-2 hover:bg-[#2d2e2e] gap-4 flex items-center cursor-default '>
                  <span><img src={SEARCH_ICON} alt='search-icon' className='w-4 invert'/></span>
                  <span>{suggestion}</span>
                </li>
               ) }
              </ul>
            }
            
        </div>
        <div className='col-span-1 -mr-7 flex items-center'>
            <img src={USER_ICON} alt='user-icon' className='w-10 invert'/>
        </div>
    </div>
  )
}

export default Header