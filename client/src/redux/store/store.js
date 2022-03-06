import {configureStore} from "@reduxjs/toolkit"
import commentatorReducer from "../reduce/commentatorSlice"
import commentatorMatchReducer from "../reduce/commentatorMatchSlice"
export const store = configureStore({
    reducer:{
        commentators:commentatorReducer,
        commentatorMatchs:commentatorMatchReducer
    }
})