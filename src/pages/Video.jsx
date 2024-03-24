// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleDataAsync } from '../Redux/youtubeDataSlice';
import { closeMenu } from "../Redux/toggleSlice";

import LiveChat from '../components/LiveChat';
import VideoPlayer from '../components/VideoPlayer';
import VideoDetails from '../components/VideoDetails';
import ChannelInfo from '../components/ChannelInfo';
import CommentContainer from '../components/CommentContainer';
import Recommendations from '../components/Recommendations';


const Video = () => {
  const { id } = useParams();

  const items = useSelector((state) => state?.data?.items);
  const isMenuOpen = useSelector((state) => state.toggle.isMenuOpen)
  const singleData = useSelector((state) => state.data.singleData);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("vidoe component");
    dispatch(closeMenu())
    dispatch(getSingleDataAsync(id))
  }, [dispatch, id]);


  return (
    <div className='grid sm:grid-cols-12 px-6 py-2'>
      <div className={`${isMenuOpen ? "col-span-7" : "col-span-8"}`}>
        {/* video Player */}
        <VideoPlayer id={id} />

        {/* Video Details */}
        <VideoDetails singleData={singleData} />
        <hr className='my-4 text-[#606060] dark:text-[#aaaaaa]' />

        {/* channel and channel info */}
        <ChannelInfo singleData={singleData} />
        <hr className='my-4 text-[#aaaaaa]' />

        {/* comment section */}
        <CommentContainer />
      </div>


      <div className={`${isMenuOpen ? "col-span-5" : "col-span-4"} px-4 py-4`}>
        {/* Live Chat */}
        <LiveChat />

        {/* Recommendation section */}
        <Recommendations items={items} />
      </div>
    </div>
  );
};

export default Video;



