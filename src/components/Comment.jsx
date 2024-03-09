// import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const Comment = ({ index, data, toggle }) => {
  const [showDown, setShowDown] = useState(true)

  function handleReplyBtn() {
    toggle(index)
    setShowDown(!showDown);
  }

  return (
    <div className='flex gap-2 my-7 ml-3'>
      <img className='w-7 h-7 rounded-full bg-white' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      <div className='flex gap-2 flex-col text-white'>
        <span className='text-xs font-medium'>
          {data?.name} <span className='text-xs font-normal text-[#aaaaaa] ml-1'>3 days ago</span>
        </span>
        <span className='text-sm'>
          {data?.text}
        </span>
        <div className='flex items-center'>
          <ThumbUpOffAltIcon /> <span className='text-[#aaaaaa] ml-1'>4</span>
          <ThumbDownOffAltIcon className='ml-2' />
          <span className='ml-4'>Reply</span>
        </div>
        {
          data?.replies?.length > 0 && (
            <button onClick={() => handleReplyBtn(index)} className='rounded-full hover:bg-[#263850] text-[#3EA4FC] px-2 py-1 w-32'>
              {showDown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              <span className='ml-2'>{data.replies.length} replies</span>
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Comment;

