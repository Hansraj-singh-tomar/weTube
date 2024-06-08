import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const SignInButton = () => {
    return (
        <Link to={"/signin"}>
            <div className='hidden sm:block px-4 py-1 border-2 border-[#3ea6ff] border-solid text-[#3ea6ff] rounded-sm font-medium cursor-pointer bg-transparent'>
                <AccountCircleOutlinedIcon />
                <span className='ml-2'>SIGN IN</span>
            </div>
        </Link>
    )
}

export default SignInButton