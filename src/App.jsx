// import styled, { ThemeProvider } from "styled-components";
// import { darkTheme, lightTheme } from "./utils/Theme";
import React, { useEffect } from 'react';
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import SignIn from "./pages/SignIn";
import Video from "./pages/Video";
import SuggestionResults from './components/SuggestionResults';
import { useSelector } from 'react-redux';

const App = () => {
  // const [darkMode, setDarkMode] = React.useState(true);
  const isMenuOpen = useSelector((state) => state.toggle.isMenuOpen)
  const darkMode = useSelector((state) => state.toggle.darkMode)

  return (
    <BrowserRouter>
      <div className={`${darkMode ? "dark" : ""} w-full h-full`}>
        <div className='z-10 sticky top-0 w-full bg-white dark:bg-[#0F0F0F] dark:text-white shadow-sm'>
          <Navbar />
        </div>

        <div className='w-full flex justify-center'>
          {isMenuOpen &&
            <div className='fixed top-14 left-0 w-64 dark:bg-[#0F0F0F] dark:text-white max-h-screen overflow-y-auto sm:block hidden'>
              <Menu darkMode={darkMode} />
            </div>
          }

          <div className={`${isMenuOpen && "sm:ml-64"} flex-1 dark:bg-[#0F0F0F] dark:text-white overflow-y-auto`}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="results" element={<SuggestionResults />} />
              <Route path="video">
                <Route path=":id" element={<Video />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

{/* <div className='w-full flex'> */ }
{/* <div className='fixed top-14 w-64 left-0 h-screen overflow-y-auto dark:bg-[#202020] dark:text-white text-sm'> */ }
{/* <div className={`dark:bg-[#181818] dark:text-white overflow-y-auto flex-1 ml-64`}> */ }


