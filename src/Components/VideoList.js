import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    //props.videos (an array)
    const renderedList = videos.map(video => {
        return <VideoItem key={video.snippet.description} onVideoSelect={onVideoSelect} video={video} />
    });

    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList