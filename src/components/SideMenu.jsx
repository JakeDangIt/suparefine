import React from 'react';
import '../styles/SideMenu.css';

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <img src="/MenuIcons/HomeIcon.svg" alt="Home Icon" className="icons" />
      <img src="/MenuIcons/SavedIcon.svg" alt="Saved Icon" className="icons" />
      <img src="/MenuIcons/NewPostIcon.svg" alt="New Post Icon" className="icons" />
    </div>
  );
};

export default SideMenu;
