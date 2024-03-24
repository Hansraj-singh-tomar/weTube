import React from 'react'

const VideoPlayer = ({ id }) => {
    return (
        <div>
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