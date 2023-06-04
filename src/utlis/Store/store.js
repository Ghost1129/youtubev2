import { configureStore } from '@reduxjs/toolkit'

import appSliceReducer from '../Slices/appSlice'

const store = configureStore({
    reducer: {
        app: appSliceReducer,

    },
})

export default store;