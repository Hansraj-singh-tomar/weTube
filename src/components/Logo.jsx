// eslint-disable-next-line no-unused-vars
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Youtube from "../assets/youtube.png";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../Redux/toggleSlice';

const Logo = () => {
    const dispatch = useDispatch();

    function toogleMenuHandler() {
        dispatch(toggleMenu());
    }

    return (
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
    )
}

export default Logo