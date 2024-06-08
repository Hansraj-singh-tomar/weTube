// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Video from "./pages/Video";
import SuggestionResults from './components/SuggestionResults';

import { useSelector } from 'react-redux';

const App = () => {
  const { isMenuOpen, darkMode } = useSelector((state) => state.toggle);

  return (
    <BrowserRouter>
      <div className={`${darkMode ? "dark" : ""} w-full h-full`}>
        <nav className='z-10 sticky top-0 w-full bg-white dark:bg-[#0F0F0F] dark:text-white shadow-sm'>
          <Navbar />
        </nav>

        <div className='w-full flex justify-center'>
          {isMenuOpen &&
            <aside className=' fixed top-14 left-0 w-64 dark:bg-[#0F0F0F] dark:text-white max-h-screen overflow-y-auto'>
              <Menu darkMode={darkMode} />
            </aside>
          }

          <main className={`${isMenuOpen && "sm:ml-64"} flex-1 dark:bg-[#0F0F0F] dark:text-white overflow-y-auto`}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="results/:query" element={<SuggestionResults />} />
              <Route path="video">
                <Route path=":id" element={<Video />} />
              </Route>
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


