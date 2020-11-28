import React from 'react';
import './Story.css';
import { Avatar } from '@material-ui/core';

function Story({ img, profilePicSrc, profileName }) {
    return (
        <div style={{ backgroundImage: `${img}`}} className="story">
            <Avatar className='story__avatar' src={profilePicSrc}/>
            <h4>{profileName}</h4>
        </div>
    )
}

export default Story
