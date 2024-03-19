import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'

const SuggestionResults = () => {
    const items = useSelector((state) => state?.data?.items)
    return (
        <div>
            {
                items.map((item) => {
                    return <Cart type="md" key={item.id} cardData={item} />
                })
            }
        </div>
    )
}

export default SuggestionResults