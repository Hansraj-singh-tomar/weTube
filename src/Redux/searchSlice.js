import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchCache: {},
    searchSuggestionCache: {}
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        cacheQueryResults: (state, action) => {
            state.searchCache = Object.assign(state.searchCache, action.payload);
        },
        cacheSearchSuggestions: (state, action) => {
            state.searchSuggestionCache = Object.assign(state.searchSuggestionCache, action.payload)
        }
    }
})

export const { cacheQueryResults, cacheSearchSuggestions } = searchSlice.actions;
export default searchSlice.reducer;
