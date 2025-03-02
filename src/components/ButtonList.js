import React from 'react';
import Button from './Button';

const categories = ["All", "Music", "Gaming", "Esports", "Live", "Mixes", "T-Series", "Technology", "Science", "Comedy", "Education", "Travel", "Food", "News"];  
// const categories = ["All", "Music", "Gaming", "Esports", "Live", "Mixes", "T-Series", "Technology", "Science", "Comedy", "Education", "Travel", "Food", "Health & Fitness", "News", "Fashion", "Automobiles", "Movies", "Web Series", "Podcasts", "Sports", "DIY & Crafts", "Photography", "Vlogs", "Animation", "History"];  

const ButtonList = () => {
  return (
    <div className='w-full overflow-hidden flex justify-center mt-4 mb-2'>
    <div className='flex overflow-hidden scrollbar-hide whitespace-nowrap'>
      {categories.map((category, index) => (
        <Button key={index} name={category}></Button>
      ))}
      </div>
    </div>
  );
}

export default ButtonList;
