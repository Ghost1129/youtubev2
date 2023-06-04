import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        CacheSearch: (state, action) => {
            state = Object.assign(state, action.payload);
        }
    },
});

export const {CacheSearch} = searchSlice.actions;

export default searchSlice.reducer;