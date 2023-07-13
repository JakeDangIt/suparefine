import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../styles/SideMenu.css';

const SideMenu = () => {
    return (
        <div className="sideMenu">
            <Link to="/home" className="icons">
                <img src="/MenuIcons/HomeIcon.svg" alt="Home Icon" className="icons" />
            </Link>
            <img src="/MenuIcons/SavedIcon.svg" alt="Saved Icon" className="icons" />
            <Link to="/create" className="icons">
                <img src="/MenuIcons/NewPostIcon.svg" alt="New Post Icon" />
            </Link>
        </div>
    );
};

export default SideMenu;
