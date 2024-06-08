// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
const ChannelInfo = ({ singleData }) => {
    const [showMore, setShowMore] = useState(false);

    let descriptionData = `${singleData[0]?.snippet?.description}`.split("\n\n")
    // console.log(str.split("\n\n"));
    return (
        <div className='sm:flex'>
            <div className='flex gap-5'>
                <img className='w-12 h-12 rounded-full' src="https://yt3.ggpht.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s68-c-k-c0x00ffffff-no-rj" />
                {/* channel detail */}
                <div className='dark:text-white'>
                    <h1 className='font-medium text-base'>{singleData[0]?.snippet?.channelTitle}</h1>
                    <p className='mt-1 mb-4 text-[#606060] dark:text-[#aaaaaa] text-xs'>7M subscribers</p>
                    {/* description */}
                    <div className='text-sm text-[#606060] dark:text-[#aaaaaa]'>
                        {
                            descriptionData?.map((des, i) => {
                                return (
                                    <p key={i} style={{ display: showMore || i < 3 ? 'block' : 'none' }}>
                                        {des}
                                    </p>
                                )
                            })
                        }
                    </div>
                    {descriptionData?.length > 3 && (
                        <button onClick={() => setShowMore(!showMore)} className='dark:text-white text-sm'>{showMore ? 'Show Less' : '...More'}</button>
                    )}
                </div>
            </div>

            <button className='h-full py-2 px-5 bg-[#cc1a00] text-white font-medium rounded-sm cursor-pointer'>Subscribe</button>
        </div>
    )
}

export default ChannelInfo