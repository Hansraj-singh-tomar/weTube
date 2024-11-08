// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from './Button'
import { useSelector } from 'react-redux'

const ButtonList = () => {
    const youtubeCategories = useSelector((state) => state?.data?.videoCategoriesData)

    return (
        <div className='flex space-x-5 whitespace-nowrap p-3 top-[50px] z- bg-white dark:bg-[#0F0F0F]  w-full overflow-x-auto fixed  bg-opacity-95'>
            {youtubeCategories?.map((item) => (
                <Button key={item?.id} btnText={item?.snippet?.title} />
            ))}
        </div>
    )
}

export default ButtonList
