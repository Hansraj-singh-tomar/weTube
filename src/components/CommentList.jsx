import React, { useState } from 'react'
import Comment from './Comment'


const CommentList = ({ comments }) => {
    const [showNested, setShowNested] = useState(null);
    const toggle = (index) => {
        if (showNested === index) {
            setShowNested(null)
        } else {
            setShowNested(index)
        }
    }
    return (
        <div>
            {
                comments?.map((item, index) => {
                    return (
                        <div key={index}>
                            <Comment index={index} data={item} showNested={showNested} setShowNested={setShowNested} toggle={toggle} />
                            {
                                showNested === index && (
                                    <div className="pl-5 ml-5">
                                        <CommentList comments={item.replies} />
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommentList
