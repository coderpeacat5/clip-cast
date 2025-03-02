import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPlayCircle,
  faUserFriends,
  faFire,
  faShoppingBag,
  faMusic,
  faFootballBall,
  faGamepad,
  faFilm
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-52 z-20 text-white bg-black">
      <ul className=''>
        <li className="p-2 py-1 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <Link to="/" className="flex items-center gap-4">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
        </li>
        <li className="p-2 py-1 flex items-center gap-4 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <FontAwesomeIcon icon={faPlayCircle} /> Shorts
        </li>
        <li className="p-2 py-1 flex items-center gap-4 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <FontAwesomeIcon icon={faUserFriends} /> Subscriptions
        </li>
        <li className='border-b border-b-gray-200 mt-5'></li>
      </ul>

      {/* Explore Section */}
      <h1 className="font-bold mt-6 mb-4" >Explore</h1>
      <ul>
        <li className="p-2 py-1 flex items-center gap-4 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <FontAwesomeIcon icon={faFire} /> Trending
        </li>
        <li className="p-2 py-1 flex items-center gap-4 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <FontAwesomeIcon icon={faShoppingBag} /> Shopping
        </li>
        <li className="p-2 py-1 flex items-center gap-4 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <FontAwesomeIcon icon={faMusic} /> Music
        </li>
        <li className="p-2 py-1 flex items-center gap-4 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <FontAwesomeIcon icon={faFootballBall} /> Sports
        </li>
        <li className="p-2 py-1 flex items-center gap-4 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <FontAwesomeIcon icon={faGamepad} /> Gaming
        </li>
        <li className="p-2 py-1 flex items-center gap-4 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <FontAwesomeIcon icon={faFilm} /> Films
        </li>
        <li className='border-b border-b-gray-200 mt-5'></li>
      </ul>


      {/* Watch Later Section */}
      <h1 className="font-bold mt-6 mb-4">Watch Later</h1>
      <ul>
        <li className="p-2 py-1 flex items-center gap-4 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <FontAwesomeIcon icon={faMusic} /> Music
        </li>
        <li className="p-2 py-1 flex items-center gap-4 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <FontAwesomeIcon icon={faFootballBall} /> Sports
        </li>
        <li className="p-2 py-1 flex items-center gap-4 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <FontAwesomeIcon icon={faGamepad} /> Gaming
        </li>
        <li className="p-2 py-1 flex items-center gap-4 rounded hover:bg-[#1e1f1f] cursor-pointer">
          <FontAwesomeIcon icon={faFilm} /> Movies
        </li>
        <li className='border-b border-b-gray-200 my-5'></li>
        <li className="p-2 py-1 font-semibold text-gray-400">© 2025 Google LLC</li>
      </ul>
    </div>
  );
};

export default Sidebar;
