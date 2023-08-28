const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  words: [],
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    addWord: {
      reducer(state, action) {
        state.words = [...state.words, action.payload];
      },
      //using prepare function for default payload as 'default' for adding word
      prepare(payload = "default") {
        return { payload };
      },
    },
  },
});

exports.wordsReducer = wordsSlice.reducer;
exports.wordsActions = wordsSlice.actions;
