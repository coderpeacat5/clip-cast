import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name :'chat',
    initialState : {
        messages : [],
    },
    reducers : {
        addMessage : (state, action) => {
            state.messages.push(action.payload)
            if (state.messages.length > 50) state.messages.shift(); // Keep only last 50 messages
        }
    }
}) 

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;
