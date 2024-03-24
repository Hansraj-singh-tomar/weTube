import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchYoutubeData, fetchSingleData, fetchSearchSuggestionsData, fetchVideoCategoriesData, fetchSearchQuery } from './youtubeDataApi'
import { cacheQueryResults, cacheSearchSuggestions } from './searchSlice'

const initialState = {
    status: 'idle',
    youtubeData: [],
    items: [],
    singleData: {},
    searchQueryData: [],
    searchSuggestionsData: [],
    videoCategoriesData: [],
}

export const getYoutubeDataAsync = createAsyncThunk('youtube/fetchYoutubeData', async (resultsPerPage) => {
    const youtubeData = await fetchYoutubeData(resultsPerPage);
    return youtubeData?.data;
})

export const getSingleDataAsync = createAsyncThunk('youtube/fetchSingleData', async (id) => {
    const singleData = await fetchSingleData(id);
    return singleData?.data;
})

export const getSearchSuggestionAsync = createAsyncThunk('youtube/fetchSearchSuggestionsData', async (searchQuery, { dispatch }) => {
    const searchSuggestionsData = await fetchSearchSuggestionsData(searchQuery);
    dispatch(cacheSearchSuggestions({ [searchQuery]: searchSuggestionsData }))
    return searchSuggestionsData;
})

export const getSearchQueryAsync = createAsyncThunk('youtube/fetchSearchQuery', async (searchQuery, { dispatch }) => {
    const searchQueryData = await fetchSearchQuery(searchQuery);
    dispatch(cacheQueryResults({ [searchQuery]: searchQueryData.slice(0, 10) }))
    return searchQueryData.slice(0, 10);
})

export const getVideoCategoriesAsync = createAsyncThunk('youtube/fetchVideoCategoriesData', async () => {
    const videoCategoriesData = await fetchVideoCategoriesData();
    return videoCategoriesData.slice(0, 8);
    // return videoCategoriesData;
})


const youtubeDataSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getYoutubeDataAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getYoutubeDataAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.youtubeData = action.payload;
                state.items = action.payload.items;
            })


            .addCase(getSingleDataAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleDataAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.singleData = action.payload.items;
            })


            .addCase(getSearchSuggestionAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSearchSuggestionAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.searchSuggestionsData = action.payload;
            })


            .addCase(getSearchQueryAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSearchQueryAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.searchQueryData = action.payload;
            })


            .addCase(getVideoCategoriesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getVideoCategoriesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.videoCategoriesData = action.payload;
            })
    }
})


export default youtubeDataSlice.reducer