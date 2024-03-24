// eslint-disable-next-line no-unused-vars
import React from 'react'
import Cart from './Cart'

// eslint-disable-next-line react/prop-types
const Recommendations = ({ items }) => {
    return (
        <div className="mt-4">
            {
                // eslint-disable-next-line react/prop-types
                items?.map((item) => {
                    return (
                        <Cart key={item.id} cardData={item} type="sm" />
                    )
                })
            }
        </div>
    )
}

export default Recommendations