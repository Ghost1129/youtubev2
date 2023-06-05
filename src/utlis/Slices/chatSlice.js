import {createSlice} from '@reduxjs/toolkit'

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
    },
    reducers: {
        setMessages: (state, action) => {
            state.messages.splice(20,1)
            state.messages.unshift(action.payload)
        }
    }


})

export const {setMessages} = chatSlice.actions

export default chatSlice.reducer



