// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import Cart from "../components/Cart";
import ButtonList from '../components/ButtonList';

import { getYoutubeDataAsync, getVideoCategoriesAsync } from '../Redux/youtubeDataSlice';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
  const { items } = useSelector((state) => state.data);
  const [resultsPerPage, setResultsPerPage] = useState(9);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoCategoriesAsync());
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  useEffect(() => {
    console.log('home component');
    dispatch(getYoutubeDataAsync(resultsPerPage))
  }, [resultsPerPage])

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) { // window.scrollY(height of all content which is inside scroll as well) // window.innerHeight(height of content which is visible to us expect which is inside scroll)
      setResultsPerPage(resultsPerPage + 9);
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

// const { status } = useSelector((state) => state.data)
// console.log(status);

{/* <Route index element={status === 'idle' ? <Home /> : <ShimmerSimpleGallery card imageHeight={300} caption />} /> */ }
