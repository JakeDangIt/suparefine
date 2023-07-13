import React from 'react';

const SideMenu = () => {
    const styles = {
        sideMenu: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        icons: {
            margin: '0.5rem',
            height: '2rem',
        },
    };

    return (
        <div style={styles.sideMenu}>
            <img src="/MenuIcons/HomeIcon.svg" alt="Home Icon" style={styles.icons} />
            <img src="/MenuIcons/SavedIcon.svg" alt="Saved Icon" style={styles.icons} />
            <img src="/MenuIcons/NewPostIcon.svg" alt="New Post Icon" style={styles.icons} />
        </div>
    );
};

export default SideMenu;
