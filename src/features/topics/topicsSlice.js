import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topicsSlice",
  initialState: {
    topics: {
        id: 1,
        name: 'Placeholder Topic',
        icon: 'default',
        quizIds: [],
    }
  },
  reducers: {
    addTopic: (state, action) => {
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
          icon: action.payload.icon,
          quizIds: [],
        }
      };
    }
  }
});

export const selectTopics = (state) => state.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
