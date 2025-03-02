import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet
  return (
    <div className='p-2 m-2 w-72 h-84 shadow-lg cursor-pointer hover:bg-[#2d2e2e] rounded text-white'>
        <img src={thumbnails.medium.url} alt='video-thumbnail' className='rounded-lg'/>
        <div>
            <h3 className='w-full font-medium py-5 h-24 overflow-hidden'>{title}</h3>
            <p className='mt-2 text-slate-300 text-[14px]'>{channelTitle}</p>
            <span className='mt-1 text-slate-300 text-[14px]'>{statistics.viewCount} views</span>
            {/* <span></span> */}
        </div>
    </div>
  )
}

export default VideoCard