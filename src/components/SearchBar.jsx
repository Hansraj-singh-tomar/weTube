// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { getSearchQueryAsync } from "../Redux/youtubeDataSlice";
import { useSelector, useDispatch } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");

    let queryData = useSelector((state) => state?.data?.searchQueryData);
    const searchCache = useSelector((state) => state?.search?.searchCache);

    useEffect(() => {
        let timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                queryData = searchCache[searchQuery]
            } else {
                dispatch(getSearchQueryAsync(searchQuery))
                // dispatch(cacheResults({ [searchQuery]: suggestions }))
            }
        }, 300)
        return () => clearTimeout(timer)
    }, [searchQuery, dispatch])

    function handleSearchList() {
        setSearchQuery("");
    }

    return (
        <div className='w-2/5'>
            <div className='w-full p-1 border-2 border-[#ccc] border-solid rounded-lg flex'>
                <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    // onFocus={() => setShowSuggestions(true)}
                    // onBlur={() => setShowSuggestions(false)}
                    className='w-full bg-transparent border-none outline-none dark:text-white'
                    placeholder="Search"
                />
                <SearchOutlinedIcon className='dark:text-white' />
            </div>
            {
                searchQuery.length > 0 && queryData.length > 0 && (
                    <div className='fixed z-10 w-[39%] h-[70%] overflow-x-auto bg-[#212121] mt-2 rounded-lg'>
                        <ul className='my-4'>
                            {
                                queryData?.map((item) => {
                                    return (
                                        <Link to={`results/${searchQuery}`} key={item}>
                                            <li onClick={handleSearchList} className='w-full hover:bg-[#383838] px-4 py-2 flex text-sm cursor-pointer'>
                                                <SearchOutlinedIcon className='dark:text-[#D5D5D5]' />
                                                {/* <p className='ml-2'>{item?.snippet?.title}</p> */}
                                                <p className='ml-2'>{item}</p>
                                            </li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default SearchBar