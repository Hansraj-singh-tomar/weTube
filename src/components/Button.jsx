import React from 'react'

const Button = ({ btnText }) => {
    return (
        <p className='min-w-8 max-h-8 mb-2 ml-4 bg-[#E5E5E5] text-black dark:bg-[#373737] dark:text-[#FFFFFF] px-2 py-1 rounded-md hover:dark:bg-[#3f3f3f] hover:bg-slate-200'>{btnText}</p>
    )
}

export default Button