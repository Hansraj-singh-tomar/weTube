// import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Youtube from "../assets/youtube.png";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from "../Redux/toggleSlice";
import { getSearchSuggestionAsync } from "../Redux/youtubeDataSlice";
// import { cacheResults } from '../Redux/searchSlice';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  let suggestions = useSelector((state) => state?.data?.searchSuggestionsData);
  // console.log("suggestion", suggestions);

  const searchCache = useSelector((state) => state.search)
  // console.log("searchCache", searchCache);

  const dispatch = useDispatch();

  function toogleMenuHandler() {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        suggestions = searchCache[searchQuery]
      } else {
        dispatch(getSearchSuggestionAsync(searchQuery))
        // dispatch(cacheResults({ [searchQuery]: suggestions }))
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  function handleSearchList() {
    setShowSuggestions(false)
  }

  return (
    <div className='w-[97%] h-14 m-auto flex justify-between items-center'>

      {/* logo */}
      <div className='flex items-center'>
        <div className='hover:bg-[#f5f5f5] dark:hover:bg-[#373737] rounded-full' onClick={() => toogleMenuHandler()}>
          <div className='py-2 px-2 cursor-pointer'>
            <MenuIcon />
          </div>
        </div>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className='flex ml-4'>
            <img src={Youtube} alt="logo" className='h-6' />
            <span className='ml-1'>YoursTube</span>
          </div>
        </Link>
      </div>

      {/* search bar */}
      <div className='w-2/5'>
        <div className='w-full p-1 border-2 border-[#ccc] border-solid rounded-lg flex'>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
            className='w-full bg-transparent border-none outline-none dark:text-white'
            placeholder="Search"
          />
          <SearchOutlinedIcon className='dark:text-white' />
        </div>
        {
          showSuggestions && suggestions.length > 0 && (
            <div className='fixed z-10 w-[39%] h-[70%] overflow-x-auto bg-[#212121] mt-2 rounded-lg'>
              <ul className='my-4'>
                {
                  suggestions?.map((item) => {
                    return (
                      <Link to="results" key={item?.id}>
                        <li onClick={handleSearchList} className='w-full hover:bg-[#383838] px-4 py-2 flex text-sm cursor-pointer'>
                          <SearchOutlinedIcon className='dark:text-[#D5D5D5]' />
                          <p className='ml-2'>{item?.snippet?.title}</p>
                        </li>
                      </Link>
                    )
                  })
                }
              </ul>
            </div>
          )
        }
      </div>

      {/* sign in btn */}
      <Link to={"/signin"}>
        <div className='px-4 py-1 border-2 border-[#3ea6ff] border-solid text-[#3ea6ff] rounded-sm font-medium cursor-pointer bg-transparent'>
          <AccountCircleOutlinedIcon />
          <span className='ml-2'>SIGN IN</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;



