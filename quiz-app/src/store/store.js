import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./settingsSlice";
import questionSlice from "./questionSlice";
import currentQuestionSlice from "./currentQuestionSlice";
import userAnswersSlice from "./userAnswersSlice";
import scoreSlice from "./scoreSlice";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    settings: settingsSlice,
    questions: questionSlice,
    currentQuestion: currentQuestionSlice,
    userAnswers: userAnswersSlice,
    score: scoreSlice,
    app: appSlice,
  },
});

export default store;
