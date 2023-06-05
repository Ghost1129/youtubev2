import { configureStore } from '@reduxjs/toolkit'

import appSliceReducer from '../Slices/appSlice'
import searchSliceReducer from '../Slices/searchSlice'
import chatSliceReducer from '../Slices/chatSlice'

const store = configureStore({
    reducer: {
        app: appSliceReducer,
        search: searchSliceReducer,
        chat: chatSliceReducer,

    },
})

export default store;