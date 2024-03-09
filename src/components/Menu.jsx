// import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import { Link } from "react-router-dom";


// Menu icons
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/toggleSlice"

const hrLine = "my-4 border-2 border-solid border-[#f5f5f5] dark:border-[#373737]";

const ItemWrapper = "hover:bg-[#f5f5f5] dark:hover:bg-[#373737] rounded-lg"

const Item = "py-2 px-2 flex items-center gap-5 cursor-pointer";

// eslint-disable-next-line react/prop-types
const Menu = ({ darkMode }) => {
  const dispatch = useDispatch();
  function handleTheme() {
    dispatch(toggleTheme());
  }

  return (
    <div>
      <div className="px-6 py-3 mb-12">
        <Link to="/">
          <div className={ItemWrapper}>
            <div className={Item}>
              <HomeIcon />
              Home
            </div>
          </div>
        </Link>
        <div className={ItemWrapper}>
          <div className={Item}>
            <ExploreOutlinedIcon />
            Explore
          </div>
        </div>
        <div className={ItemWrapper}>
          <div className={Item}>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </div>
        </div>
        <hr className={hrLine} />
        <div className={ItemWrapper}>
          <div className={Item}>
            <VideoLibraryOutlinedIcon />
            Library
          </div>
        </div>
        <div className={ItemWrapper}>
          <div className={Item}>
            <HistoryOutlinedIcon />
            History
          </div>
        </div>
        <hr className={hrLine} />
        <div>
          Sign in to like videos, comment, and subscribe.
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <button className="mt-2 py-1 px-4 bg-transparent border-2 border-solid border-[#3ea6ff] text-[#3ea6ff] rounded font-medium flex items-center cursor-pointer">
              <AccountCircleOutlinedIcon />
              SIGN IN
            </button>
          </Link>
        </div>
        <hr className={hrLine} />
        <h2 className="text-sm mb-5 font-medium text-[#606060] dark:text-[#aaaaaa]">BEST OF YOURSTUBE</h2>
        <div className={ItemWrapper}>
          <div className={Item}>
            <LibraryMusicOutlinedIcon />
            Music
          </div>
        </div>
        <div className={ItemWrapper}>
          <div className={Item}>
            <SportsBasketballOutlinedIcon />
            Sports
          </div>
        </div>
        <div className={ItemWrapper}>
          <div className={Item}>
            <SportsEsportsOutlinedIcon />
            Gaming
          </div>
        </div>
        <div className={ItemWrapper}>
          <div className={Item}>
            <MovieOutlinedIcon />
            Movies
          </div>
        </div>
        <div className={ItemWrapper}>
          <div className={Item}>
            <ArticleOutlinedIcon />
            News
          </div>
        </div>
        <div className={ItemWrapper}>
          <div className={Item}>
            <LiveTvOutlinedIcon />
            Live
          </div>
        </div>
        <hr className={hrLine} />
        <div className={ItemWrapper}>
          <div className={Item}>
            <SettingsOutlinedIcon />
            Settings
          </div>
        </div>
        <div className={ItemWrapper}>
          <div className={Item}>
            <FlagOutlinedIcon />
            Report
          </div>
        </div>
        <div className={ItemWrapper}>
          <div className={Item}>
            <HelpOutlineOutlinedIcon />
            Help
          </div>
        </div>
        <div className={ItemWrapper}>
          <div className={Item} onClick={handleTheme}>
            <SettingsBrightnessOutlinedIcon />
            {darkMode ? "LightMode" : "DarkMode"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

