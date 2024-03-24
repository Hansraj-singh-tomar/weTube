// import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from "react-router-dom";
import { formatNumber } from "../utils/helperFunction"


// eslint-disable-next-line react/prop-types
const Cart = ({ cardData, type }) => {

  return (
    <Link to={`/video/${cardData?.id}`} style={{ textDecoration: "none" }}>
      {/* container */}
      <div className={`${type === "sm" ? "flex mb-5" : type === "md" ? "flex px-6 mb-7" : ""} w-full cursor-pointer`}>

        {/* card Image */}
        <img
          className={`${type === "sm" ? "w-48 h-24" : type === "md" ? "w-full h-full bg-cover mx-2" : "w-full h-48"} bg-[#999] rounded-xl`}
          src={cardData?.snippet?.thumbnails?.medium?.url}
        />

        {/* details */}
        <div className={`w-full flex gap-3 ${type === "sm" ? "mt-0 pl-2" : "mt-3"} `}>
          {/* channel Image */}
          {
            type !== "sm" && type !== "md" ?
              <img
                className={`w-9 h-9 rounded-full bg-[#999]`}
                src="https://yt3.ggpht.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s68-c-k-c0x00ffffff-no-rj"
                alt="img"
              /> : ""
          }
          {/* channel details */}
          <div className=''>
            <h1 className='text-base font-medium dark:text-white'>{type === "md" ? cardData?.snippet?.title : (cardData?.snippet?.title).substr(0, 44) + "..."}</h1>
            <h2 className='text-sm text-[#606060] dark:text-[#aaaaaa] mt-1'>{cardData?.snippet?.channelTitle}</h2>
            {type === "md" && <p className='text-sm text-[#606060] dark:text-[#aaaaaa] mt-1'>{cardData?.snippet?.description}</p>}
            {type !== "md" && <div className='text-sm text-[#606060] dark:text-[#aaaaaa]'>{formatNumber(cardData?.statistics?.viewCount)} views</div>}
          </div>

        </div>
      </div>
    </Link>
  );
};

export default Cart;

