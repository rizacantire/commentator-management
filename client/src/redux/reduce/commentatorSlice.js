import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommentatorAsync = createAsyncThunk("api/Commentators",async()=>{
    const response = await axios.get("https://localhost:5001/api/Commentators")
    return await response.data;

})

export const commentatorSlice = createSlice({
    name:"commentators",
    initialState:{
        items:[],
        isLoading : false,
        error:null
    },
    reducers:{
        //addCommentator:
    },
    extraReducers:{
        [getCommentatorAsync.pending]:(state,action) =>{
            state.isLoading = true
        },
        [getCommentatorAsync.fulfilled]:(state,action)=>{
            state.items = action.payload;
            state.isLoading = false;

        },
        [getCommentatorAsync.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
})
export const commentatorList = (state)=> state.commentators.items;
export default commentatorSlice.reducer;