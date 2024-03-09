import { configureStore } from '@reduxjs/toolkit';
import youtubeDataRduccer from './youtubeDataSlice';
import toggleReducer from './toggleSlice';
import searchReducer from "./searchSlice";
import liveChatReducer from "./liveChatSlice";
export const store = configureStore({
    reducer: {
        data: youtubeDataRduccer,
        toggle: toggleReducer,
        search: searchReducer,
        chat: liveChatReducer,
    },
})

