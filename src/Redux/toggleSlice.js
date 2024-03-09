import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOpen: true,
    darkMode: true,
}

const toogleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode
        },
        closeMenu: (state) => {
            state.isMenuOpen = false
        },
    }
})

export const { toggleMenu, toggleTheme, closeMenu } = toogleSlice.actions
export default toogleSlice.reducer