import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./global";

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    updateScore: (state, action) => {
      state.score += action.payload;
    },
  },
});

export const { updateScore } = scoreSlice.actions;
export default scoreSlice.reducer;
