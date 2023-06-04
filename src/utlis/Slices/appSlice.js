import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        setMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
});

export const { setMenuOpen, closeMenu } = appSlice.actions;

export const selectIsMenuOpen = (state) => state.app.isMenuOpen;

export default appSlice.reducer;