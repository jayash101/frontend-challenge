import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./global";

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    updateError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { updateIsLoading, updateError } = appSlice.actions;
export default appSlice.reducer;
