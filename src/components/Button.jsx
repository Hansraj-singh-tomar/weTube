import React from 'react'

const Button = ({ btnText }) => {
    return (
        <button className='max-h-8 mb-2 ml-4 dark:bg-[#373737] dark:text-[#FFFFFF] px-2 py-1 rounded-md hover:dark:bg-[#3f3f3f] hover:bg-slate-200'>{btnText}</button>
    )
}

export default Button