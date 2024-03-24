import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cart from './Cart'
import { useParams } from 'react-router-dom'
import { getSearchSuggestionAsync } from '../Redux/youtubeDataSlice'

const SuggestionResults = () => {
    const { query } = useParams();

    const dispatch = useDispatch();

    let searchSuggestionsData = useSelector((state) => state?.data?.searchSuggestionsData)
    let searchSuggestionCache = useSelector((state) => state?.search?.searchSuggestionCache)

    useEffect(() => {
        console.log("suggestion component is being render or not");
        if (searchSuggestionCache[query]) {
            searchSuggestionsData = searchSuggestionCache[query]
        } else {
            dispatch(getSearchSuggestionAsync(query))
        }
    }, [query, dispatch]);

    return (
        <div className='h-screen'>
            <h1 className='px-6 py-4 mb-2 text-xl font-semibold'>Latest from {query}</h1>
            <div>
                {
                    searchSuggestionsData?.map((item) => {
                        return <Cart type="md" key={item.id} cardData={item} />
                    })
                }
            </div>
        </div>
    )
}

export default SuggestionResults