import { configureStore } from '@reduxjs/toolkit'

import appSliceReducer from '../Slices/appSlice'
import searchSliceReducer from '../Slices/searchSlice'

const store = configureStore({
    reducer: {
        app: appSliceReducer,
        search: searchSliceReducer,

    },
})

export default store;