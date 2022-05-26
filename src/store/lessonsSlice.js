import {createSlice} from "@reduxjs/toolkit";

const LessonsSlice = createSlice({
    name: "lessons",
    initialState: {
        lessons: [],
        error: null
    },
    reducers: {
        addLesson (state, action) {
            state.lessons.push(action.payload)
        },
    }
})

export default LessonsSlice.reducer;