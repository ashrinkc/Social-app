import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        isFetching:false,
        error:false,
    },
    reducers:{
        loginStart:(state) =>{
            state.isFetching = true;
            state.error = false
        },
        loginSuccess:(state,actions)=>{
            state.isFetching = false;
            state.user = actions.payload;
            state.error = false
        },
        loginFailure:(state)=>{
            state.isFetching = false;
            state.error = true
        }
    }
})

export const { loginStart, loginSuccess, loginFailure } =
  userSlice.actions;
export default userSlice.reducer