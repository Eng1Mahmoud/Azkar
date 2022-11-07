import { configureStore } from "@reduxjs/toolkit";
import showSlice from './slices/class'
import curuntData from "./slices/curuntData";
import Audio from "./slices/Audio";
const store = configureStore({
    reducer:{
        showSlice,
        curuntData,
        Audio,
    }
})

export default store;