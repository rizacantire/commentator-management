import {configureStore} from "@reduxjs/toolkit"
import commentatorReducer from "../reduce/commentatorSlice"

export const store = configureStore({
    reducer:{
        commentators:commentatorReducer
    }
})