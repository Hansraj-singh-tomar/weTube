import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'

const ButtonList = () => {
    // let categories = ["All", "Movies", "Javascript", "Stocks", "Sales", "DevOps", "Watched", "Recently updated", "New to you"]
    const youtubeCategories = useSelector((state) => state?.data?.videoCategoriesData)
    // console.log(youtubeCategories);
    return (
        <div className='fixed bg-white dark:bg-[#0F0F0F] px-2 pt-3 flex flex-wrap w-full'>
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