import React from 'react'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";

import { formatNumber } from '../utils/helperFunction';

const Button = 'bg-transparent flex items-center gap-1 cursor-pointer dark:text-white';

const VideoDetails = ({ singleData }) => {
    // here we are changing date in 22, feb, 2024 format
    const parsedDate = new Date(singleData[0]?.snippet?.publishedAt);
    return (
        <>
            {/* title */}
            <h1 className='text-lg font-normal mt-5 mb-3 dark:text-white'>
                {singleData[0]?.snippet?.title}
            </h1>
            {/* details */}
            <div className='sm:flex items-center justify-between'>
                {/* info */}
                <span className='text-[#606060] dark:text-[#aaaaaa]'>{formatNumber(singleData[0]?.statistics?.viewCount)} views • {parsedDate.toDateString()}</span>
                {/* buttons */}
                <div className='mt-3 flex gap-5'>
                    <button className={Button}>
                        <ThumbUpOutlinedIcon /> {formatNumber(singleData[0]?.statistics?.likeCount)}
                    </button>
                    <button className={Button}>
                        <ThumbDownOffAltOutlinedIcon /> Dislike
                    </button>
                    <button className={Button}>
                        <ReplyOutlinedIcon /> Share
                    </button>
                    <button className={Button}>
                        <AddTaskOutlinedIcon /> Save
                    </button>
                </div>
            </div>
        </>
    )
}

export default VideoDetails