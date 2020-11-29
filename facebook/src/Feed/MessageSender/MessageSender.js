import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

    const [input, setInput] = useState('');     /* Use state React hook */
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        // Some clever db stuff
        setInput('');   // Set it back to empty once enter is hit
        setImageUrl('');    // Set it back to empty when enter is hit
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        className="messageSender__input" 
                        type="text" placeholder={`What's on your mind?`}/>
                    <input 
                        value={imageUrl}
                        onChange={(event) => setImageUrl(event.target.value)}
                        placeholder={`Image URL (Optional)`}/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }}/>
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
