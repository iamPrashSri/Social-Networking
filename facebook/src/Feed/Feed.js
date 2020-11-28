import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
        </div>
    )
}

export default Feed
