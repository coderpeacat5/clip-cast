import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeMenu())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='bg-black'>
      <div>
        <iframe
          className='w-screen h-[450px]'
          src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <CommentContainer />
    </div>
  )
}

export default WatchPage