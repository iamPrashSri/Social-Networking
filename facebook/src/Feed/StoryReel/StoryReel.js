import React from 'react';
import './StoryReel.css';
import Story from './Story/Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                img='https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ'
                profileName='Prashant Srivastava'
                profilePicSrc='https://avatars2.githubusercontent.com/u/56686827?
                            s=400&u=4667f93156350bd84939c66a48a67e2
                            ff359a0e2&v=4'
            />

            <Story 
                img='https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg'
                profileName='Suraj Shinde'
                profilePicSrc='https://avatars2.githubusercontent.com/u/56686827?
                            s=400&u=4667f93156350bd84939c66a48a67e2
                            ff359a0e2&v=4'
            />

            <Story 
                img='https://i.pinimg.com/originals/c8/2a/f9/c82af9c8a818d8dba545fb896b8a6b2c.jpg'
                profileName='Shrikant Davange'
                profilePicSrc='https://avatars2.githubusercontent.com/u/56686827?
                            s=400&u=4667f93156350bd84939c66a48a67e2
                            ff359a0e2&v=4'
            />

            <Story 
                img='https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg'
                profileName='Utkarsh Pagar'
                profilePicSrc='https://avatars2.githubusercontent.com/u/56686827?
                            s=400&u=4667f93156350bd84939c66a48a67e2
                            ff359a0e2&v=4'
            />

            <Story 
                img='https://specials-images.forbesimg.com/imageserve/5f302109ffad89f9130e07db
                    /960x0.jpg?cropX1=0&cropX2=4800&cropY1=243&cropY2=2943'
                profileName='Nikhil Girwalkar'
                profilePicSrc='https://avatars2.githubusercontent.com/u/56686827?
                            s=400&u=4667f93156350bd84939c66a48a67e2
                            ff359a0e2&v=4'
            />
        </div>
    )
}

export default StoryReel
