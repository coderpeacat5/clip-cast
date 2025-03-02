import React, { useEffect, useState } from 'react'
import { YT_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YT_VIDEOS_API)
    const json = await data.json();

    // console.log(json)
    setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap justify-center p-2'>
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))
      }
    </div>
  )
}

export default VideoContainer