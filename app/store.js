const { configureStore } = require("@reduxjs/toolkit");
const { counterReducer } = require("../features/counter/counterSlice");
const { wordsReducer } = require("../features/words/wordsSlice");

const store = configureStore({
  reducer: {
    count: counterReducer,
    words: wordsReducer,
  },
});

module.exports = store;
