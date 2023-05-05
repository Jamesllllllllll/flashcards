import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToQuizIds } from "../topics/topicsSlice";

// Fix function createQuiz below
export const createQuiz = createAsyncThunk(
  "quizzesSlice/createQuiz",
  async (quiz, { dispatch }) => {
    const response = await addQuiz(quiz);
    dispatch(response);
    const quizId = {quizId: response.payload.id, topicId: response.payload.topicId};
    const addedQuiz = await addToQuizIds(quizId);
    dispatch(addedQuiz);
  }
);

export const quizzesSlice = createSlice({
  name: "quizzesSlice",
  initialState: {
    quizzes: {
      // 456: {
      //   id: "456",
      //   topicId: "1",
      //   name: "quiz for example topic",
      //   cardIds: ["789", "101", "102"]
      // },
      // 789: {
      //   id: "789",
      //   topicId: "1",
      //   name: "another quiz for example topic",
      //   cardIds: ["789", "101", "102"]
      // }
    }
  },
  reducers: {
    addQuiz: (state, action) => {
      return {
        quizzes: {
          ...state.quizzes,
          [action.payload.id]: {
            id: action.payload.id,
            name: action.payload.name,
            topicId: action.payload.topicId,
            cardIds: action.payload.cardIds
          }
        }
      };
    }
  },
  failedToSaveQuiz: false,
  isSavingQuiz: false,
  // isAddingQuizId: false,
  // failedToAddId: false,
  extraReducers: (builder) => {
    builder
      .addCase(createQuiz.pending, (state) => {
        state.isSavingQuiz = true;
        state.failedToSaveQuiz = false;
      })
      .addCase(createQuiz.fulfilled, (state, action) => {
        state.isSavingQuiz = false;
        state.failedToSaveQuiz = false;
        // state.quizzes = action.payload; // This is probably wrong
      })
      .addCase(createQuiz.rejected, (state) => {
        state.isSavingQuiz = false;
        state.failedToSaveQuiz = true;
        alert("Error!");
      })
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
