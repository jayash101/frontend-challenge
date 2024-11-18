import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./global";

export const fetchQuestions = createAsyncThunk(
  "fetchQuestions",
  async ({ category, difficulty }) => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );

    if (!response.ok) {
      throw new Error("Unable to fetch");
    }

    const data = await response.json();

    return data.results;
  }
);

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    updateDifficulty: (state, action) => {
      state.settings.difficulty = action.payload;
    },

    updateCategory: (state, action) => {
      state.settings.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.questions = action.payload;
    });

    builder.addCase(fetchQuestions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { updateDifficulty, updateCategory } = questionSlice.actions;
export default questionSlice.reducer;
