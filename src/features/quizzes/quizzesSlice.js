import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
  name: "quizzesSlice",
  initialState: {
    quizzes: {

    }
  },
  reducers: {
    addQuiz: (state, action) => {
        return {

        }
    }
  }
});

export const selectQuizzes = (state) => state.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;