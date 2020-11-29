import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <iframe
                title="Iframe" 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.
                    facebook.com%2Ffacebook&tabs=timeline&width=215&height=1500&small_
                    header=true&adapt_container_width=true&hide_cover=false&show_facepile
                    =true&appId" 
                width="215" 
                height="100%" 
                style={{ border:"none", overflow: "hidden" }}
                scrolling="no" 
                frameborder="0" 
                allowTransparency="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
        </div>
    )
}

export default Widgets
