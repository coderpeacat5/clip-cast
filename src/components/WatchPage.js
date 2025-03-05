import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeMenu())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='bg-black text-white'>
      <div className='w-screen flex'>
        <div className='w-[60%] p-4 ml-8'>
          <iframe
            className='w-full h-[450px] rounded-t-lg'
            src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='w-[35%] p-4'>
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  )
}

export default WatchPage