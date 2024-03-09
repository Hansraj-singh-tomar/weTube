import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { generateRandomName, makeRandomMessage } from "../utils/helperFunction"
import { addMessage } from "../Redux/liveChatSlice";
import { useDispatch, useSelector } from 'react-redux';

const LiveChat = () => {

    const [liveChat, setLiveChat] = useState("");
    const chatData = useSelector((state) => state.chat.messages)
    const dispatch = useDispatch();

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(10)
            }))
        }, 400)

        return () => clearInterval(i)
    }, [dispatch]);

    return (
        <>
            <div className='border-[#272727] p-2 border-2 h-[550px] rounded-lg bg-transparent overflow-y-scroll flex flex-col-reverse'>
                {
                    chatData.map((el, i) => {
                        return <ChatMessage key={i} name={el.name} message={el.message} />
                    })
                }
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({
                        name: "hansraj",
                        message: liveChat
                    }))
                    setLiveChat("")
                }}
                className='border-2 border-t-0 border-[#272727] p-2 rounded-lg flex justify-around'
            >
                <input value={liveChat} onChange={(e) => setLiveChat(e.target.value)} type="text" placeholder='chat' className='w-[80%] bg-[#272727] p-2 rounded-full dark:text-white' />
                <button className='bg-[#272727] dark:text-white rounded-full p-2'>send</button>
            </form>
        </>
    )
}

export default LiveChat