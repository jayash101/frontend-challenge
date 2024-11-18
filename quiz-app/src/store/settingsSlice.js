import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./global";

// Starting slice
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    
  },
});

export default settingsSlice.reducer;
