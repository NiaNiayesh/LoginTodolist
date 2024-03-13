import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        loginToken: ""
    },
    reducers: {
        setLoginToken: (state,action) => {
            state.loginToken = action.payload
        },
        removeLoginToken: (state) => {
            state.loginToken = ""
        }
    }
})
export const {setLoginToken,removeLoginToken} = userSlice.actions
export default userSlice.reducer