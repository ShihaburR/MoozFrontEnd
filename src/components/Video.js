import React from 'react'

function Video () {
    return (
    <div id="video-chat-container" className="video-position" style="display:none">
        <video id="local-video" autoplay="autoplay"></video>
        <video id="remote-video" autoplay="autoplay"></video>
    </div>
    )
}