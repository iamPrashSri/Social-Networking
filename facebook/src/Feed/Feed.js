import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from "./Post/Post";

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic='https://avatars2.githubusercontent.com/u/56686827?
                            s=400&u=4667f93156350bd84939c66a48a67e2
                            ff359a0e2&v=4'
                image='https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ'
                timeStamp="This is a timestamp"
                message="WOW This works!!"
                username="iamPrash_Sri"
            />
            <Post 
                profilePic='https://media.short-biography.com/wp-content/uploads/hrithik-roshan/Hrithik-Roshan.jpg'
                image=''
                timeStamp="This is a timestamp"
                message="WOW This works!!"
                username="iamHritikRosh"
            />
        </div>
    )
}

export default Feed
