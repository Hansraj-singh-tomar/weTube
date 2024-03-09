// import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Cart from "../components/Cart";
import { getYoutubeDataAsync, getVideoCategoriesAsync } from '../Redux/youtubeDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import ButtonList from '../components/ButtonList';

const Home = () => {
  const items = useSelector((state) => state.data.items);
  // console.log(items);
  const [resultsPerPage, setResultsPerPage] = useState(9);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoCategoriesAsync());
  }, [])

  useEffect(() => {
    dispatch(getYoutubeDataAsync(resultsPerPage))
  }, [dispatch, resultsPerPage])

  const scrollToEnd = () => {
    setResultsPerPage(resultsPerPage + 9);
  };

  window.onscroll = function () {
    // check if the page has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <div>
      <ButtonList />
      <div className='py-20 px-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8'>
        {
          items?.map((item) => {
            return (
              <Cart key={item.id} cardData={item} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Home;

