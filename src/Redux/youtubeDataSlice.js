import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchYoutubeData, fetchSingleData, fetchSearchSuggestionsData, fetchVideoCategoriesData } from './youtubeDataApi'
import { cacheResults } from './searchSlice'

const initialState = {
    status: 'idle',
    youtubeData: [],
    items: [],
    singleData: {},
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
    dispatch(cacheResults({ [searchQuery]: searchSuggestionsData.slice(0, 10) }))
    return searchSuggestionsData.slice(0, 10);
})

export const getVideoCategoriesAsync = createAsyncThunk('youtube/fetchVideoCategoriesData', async () => {
    const videoCategoriesData = await fetchVideoCategoriesData();
    return videoCategoriesData.slice(0, 8);
})


const youtubeDataSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {
        // todoAdded(state, action) {
        //     state.push({
        //         id: action.payload.id,
        //         text: action.payload.text,
        //         completed: false,
        //     })
        // },
        // todoToggled(state, action) {
        //     const todo = state.find((todo) => todo.id === action.payload)
        //     todo.completed = !todo.completed
        // },
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

            .addCase(getVideoCategoriesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getVideoCategoriesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.videoCategoriesData = action.payload;
            })
    }
})


// export const { todoAdded, todoToggled } = youtubeDataSlice.actions
export default youtubeDataSlice.reducer