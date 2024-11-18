export const initialState = {
  settings: {
    difficulty: "easy",
    category: 10,
  },

  questions: [{}],
  currentQuestionIndex: 0,
  userAnswers: [],
  score: 0,
  isLoading: true,
  error: null,
};
