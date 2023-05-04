import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToQuizIds } from "../topics/topicsSlice";

// Fix function createQuiz below
export const createQuiz = createAsyncThunk(
  "quizzes/createQuiz",
  async (quiz, { dispatch }) => {
    const response = await addQuiz(quiz);
    const quizId = await addToQuizIds(quiz);
    // const addQuizId = await addToQuizIds(response);
    // console.log(response);
    dispatch(response);
    dispatch(quizId);
    // await thunkApi.dispatch(addToQuizIds);
  }
);



export const quizzesSlice = createSlice({
  name: "quizzesSlice",
  initialState: {
    quizzes: {
      456: {
        id: "456",
        topicId: "227fad11-9788-4825-a255-3a0f2de22c61",
        name: "quiz for example topic",
        cardIds: ["789", "101", "102"]
      },
      789: {
        id: "789",
        topicId: "227fad11-9788-4825-a255-3a0f2de22c61",
        name: "another quiz for example topic",
        cardIds: ["789", "101", "102"]
      }
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
  isAddingQuizId: false,
  failedToAddId: false,
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
      /*.addCase(addToQuizIds.pending, (state) => {
        state.isAddingQuizId = true;
        state.failedToAddId = false;
      })
      .addCase(addToQuizIds.fulfilled, (state, action) => {
        state.isAddingQuizId = false;
        state.failedToAddId = false;
      })
      .addCase(addToQuizIds.rejected, (state) => {
        state.isAddingQuizId = false;
        state.failedToAddId = true;
      });*/
  }
});

export const selectQuizzes = (state) => state.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
