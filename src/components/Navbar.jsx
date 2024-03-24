// import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import Logo from './Logo';
import SignInButton from './SignInButton';
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
    <div className='w-[97%] h-14 m-auto flex justify-between items-center'>

      {/* logo */}
      <Logo />

      {/* search bar */}
      <SearchBar />

      {/* sign in btn */}
      <SignInButton />
    </div>
  );
};

export default Navbar;



