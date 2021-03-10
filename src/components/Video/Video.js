import React from 'react'

function Video () {
    return (
    <div id="video-chat-container" className="Dish">
        <video id="local-video" autoplay="autoplay" className="Camera"></video>
        <video id="remote-video" autoplay="autoplay" className="Camera"></video>
    </div>
    )
}

export default Video;