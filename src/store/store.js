import {configureStore} from "@reduxjs/toolkit";
import lessonsReducer from "./lessonsSlice";

export const store = configureStore({
    reducer: {
        lessons: lessonsReducer,
    }
})