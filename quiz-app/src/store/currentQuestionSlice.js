import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./global";

const currentQuestionSlice = createSlice({
  name: "currentQuestion",
  initialState,
  reducers: {
    updateCurrentQuestionIndex: (state, action) => {
      state.currentQuestionIndex = action.payload;
    },
  },
});

export const { updateCurrentQuestionIndex } = currentQuestionSlice.actions;
export default currentQuestionSlice.reducer;
