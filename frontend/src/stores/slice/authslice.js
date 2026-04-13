import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleLoginApi } from "../../services/loginServices";

export const authThunk = createAsyncThunk(
    "auththunk",
    async (data, { rejectWithValue }) => {
        try {
            const response = await handleLoginApi(data);
            return response;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Something went wrong"
            );
        }
    }
);

const initialState = {
    isLoggedIn: localStorage.getItem('token')?true:false,
    token: localStorage.getItem('token') || null,
    user: null,
    isError:null,
    isLoading:false,
}

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(authThunk.pending,(state)=>{
            state.isLoading = true
            state.isError = null
        });
        builder.addCase(authThunk.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isLoggedIn = true
            state.token = action.payload.token
            state.user = action.payload.user
            localStorage.setItem('token', action.payload.token)
        });
        builder.addCase(authThunk.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = action.payload
        });
    }
});

export default authSlice.reducer
