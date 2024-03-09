// import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import CommentContainer from '../components/CommentContainer';
import Cart from "../components/Cart";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleDataAsync } from '../Redux/youtubeDataSlice';
import { closeMenu } from "../Redux/toggleSlice";
import LiveChat from '../components/LiveChat';
import { formatNumber } from '../utils/helperFunction';

const Video = () => {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);
  const items = useSelector((state) => state?.data?.items);
  const isMenuOpen = useSelector((state) => state.toggle.isMenuOpen)
  const singleData = useSelector((state) => state.data.singleData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu())
    // dispatch(getYoutubeDataAsync(30))
  }, []);

  useEffect(() => {
    dispatch(getSingleDataAsync(id))
  }, [dispatch, id]);


  // here we are changing date in 22, feb, 2024 format
  const parsedDate = new Date(singleData[0]?.snippet?.publishedAt);

  let descriptionData = `${singleData[0]?.snippet?.description}`.split("\n\n")
  // console.log(str.split("\n\n"));

  const Button = 'bg-transparent flex items-center gap-1 cursor-pointer dark:text-white';

  function toggleShowMore() {
    setShowMore(!showMore)
  }

  return (
    <div className='grid sm:grid-cols-12 px-6 py-2'>
      {console.log("is this being rendered or not lets's see")}
      <div className={`${isMenuOpen ? "col-span-7" : "col-span-8"}`}>
        {/* video wrapper */}
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
        {/* title */}
        <h1 className='text-lg font-normal mt-5 mb-3 dark:text-white'>
          {singleData[0]?.snippet?.title}
        </h1>
        {/* details */}
        <div className='flex items-center justify-between'>
          {/* info */}
          <span className='text-[#606060] dark:text-[#aaaaaa]'>{formatNumber(singleData[0]?.statistics?.viewCount)} views • {parsedDate.toDateString()}</span>
          {/* buttons */}
          <div className='flex gap-5'>
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
        <hr className='my-4 text-[#606060] dark:text-[#aaaaaa]' />
        {/* channel and channel info */}
        <div className='flex'>
          <div className='flex gap-5'>
            <img className='w-12 h-12 rounded-full' src="https://yt3.ggpht.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s68-c-k-c0x00ffffff-no-rj" />
            {/* channel detail */}
            <div className='dark:text-white'>
              <h1 className='font-medium text-base'>{singleData[0]?.snippet?.channelTitle}</h1>
              <p className='mt-1 mb-4 text-[#606060] dark:text-[#aaaaaa] text-xs'>7M subscribers</p>
              {/* description */}
              <div className='text-sm text-[#606060] dark:text-[#aaaaaa]'>
                {
                  descriptionData?.map((des, i) => {
                    return (
                      <p key={i} style={{ display: showMore || i < 3 ? 'block' : 'none' }}>
                        {des}
                      </p>
                    )
                  })
                }
              </div>
              {descriptionData?.length > 3 && (
                <button onClick={toggleShowMore} className='dark:text-white text-sm'>{showMore ? 'Show Less' : '...More'}</button>
              )}
            </div>
          </div>

          <button className='h-full py-2 px-5 bg-[#cc1a00] text-white font-medium rounded-sm cursor-pointer'>Subscribe</button>
        </div>
        <hr className='my-4 text-[#aaaaaa]' />
        <CommentContainer />
      </div>

      <div className={`${isMenuOpen ? "col-span-5" : "col-span-4"} px-4 py-4`}>

        {/* Live Chat */}
        {/* <LiveChat /> */}

        {/* Recommendation section */}
        <div className={`${isMenuOpen ? "col-span-5" : "col-span-4"} px-4 py-4`}>
          {
            items.map((item) => {
              return (
                <Cart key={item.id} cardData={item} type="sm" />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Video;



