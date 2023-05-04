import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topicsSlice",
  initialState: {
    topics: {
      // Placeholder must be here to not throw error. Issue with quizIds not defined
      id: 1,
      name: "Placeholder Topic",
      icon: "default",
      quizIds: []
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
          quizIds: []
        }
      };
    },
    addToQuizIds: (state, action) => {
      return {
        ...state,
        [action.payload.id]: {
          quizIds: state.topics.quizIds.push(action.payload.quizIds)
        }
       // Step 11: Something that adds a quiz's id to the quizIds  
       // array of the topic the quiz is associated with.
       // This action will receive a payload of the form
       // {quizId: '123', topicId: '456'}.
      };
    }
  }
});

export const selectTopics = (state) => state.topics;

export const { addTopic, addToQuizIds } = topicsSlice.actions;

export default topicsSlice.reducer;
