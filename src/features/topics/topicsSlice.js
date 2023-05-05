import { createSlice } from "@reduxjs/toolkit";
const quizIds = [];
export const topicsSlice = createSlice({
  name: "topicsSlice",
  initialState: {
    topics: {
      // Placeholder must be here to not throw error. Issue with quizIds not defined
      // 1: {
      //   id: "1",
      //   name: "Placeholder Topic",
      //   icon:
      //     "https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/shuttlecock.svg",
      //   quizIds: ["456", "789"]
      // }
    }
  },
  reducers: {
    addTopic: (state, action) => {
      return {
        topics: {
          ...state.topics,
          [action.payload.id]: {
            id: action.payload.id,
            name: action.payload.name,
            icon: action.payload.icon,
            quizIds: quizIds
          }
        }
      };
    },
    addToQuizIds: (state, action) => {
      const { topicId, quizId } = action.payload;
      if (state.topics[topicId]) {
        state.topics[topicId].quizIds.push(quizId);
      }
    }
  }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addToQuizIds } = topicsSlice.actions;

export default topicsSlice.reducer;
