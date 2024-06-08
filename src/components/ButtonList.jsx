import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'

const ButtonList = () => {
    // let categories = ["All", "Movies", "Javascript", "Stocks", "Sales", "DevOps", "Watched", "Recently updated", "New to you"]
    const youtubeCategories = useSelector((state) => state?.data?.videoCategoriesData)
    // console.log(youtubeCategories);
    return (
        <div className='hidden fixed sm:flex flex-wrap bg-white dark:bg-[#0F0F0F] px-2 pt-3 w-full'>
            {/* <div className='w-full overflow-x-scroll transition ease-out duration-400 scroll-smooth'> */}
            {
                youtubeCategories.map((item) => {
                    return (
                        <>
                            <Button key={item?.id} btnText={item?.snippet?.title} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default ButtonList