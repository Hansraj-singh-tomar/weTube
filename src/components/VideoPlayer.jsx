// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const VideoPlayer = ({ id }) => {
    return (
        <div className=''>
            <iframe
                width="100%"
                height="435"
                src={`https://www.youtube.com/embed/${id}`}
                title="YoursTub video player"
                frameBorder="0"
                allow="accelerometer: autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "12px" }}
            ></iframe>
        </div>
    )
}

export default VideoPlayer