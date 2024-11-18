import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./global";

const userAnswersSlice = createSlice({
  name: "userAnswers",
  initialState,
  reducers: {
    updateUserAnswers: (state, action) => {
      // Extract question index and answer from the action payload.
      const { questionIndex, answer } = action.payload;

      // Update user's answer to the current question in the state.userAnswers array.
      state.userAnswers[questionIndex] = answer;
    },
  },
});

export const { updateUserAnswers } = userAnswersSlice.actions;
export default userAnswersSlice.reducer;
