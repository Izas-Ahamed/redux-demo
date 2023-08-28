const { createSlice } = require("@reduxjs/toolkit");
const { wordsActions } = require("../words/wordSlice");

const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increament: {
      reducer(state, action) {
        state.count = state.count + action.payload;
      },
      //using prepare function for default payload as 1 for counter increament
      prepare(payload = 1) {
        return { payload };
      },
    },
    decreament: (state) => {
      state.count--;
    },
  },
  //here we adding case that matches add words and increasing count if any words added(for demo)
  // - because not all reducers recieve actions like redux in redux-toolkit
  //
  // we can add extra reducers with manually writing the action case
  //   extraReducers: {
  //     ["words/addWord"]: (state) => {
  //       state.count++;
  //     },
  //   },
  //
  // or we can do like this,
  extraReducers: (builder) => {
    builder.addCase(wordsActions.addWord, (state) => {
      state.count++;
    });
  },
});

exports.counterReducer = counterSlice.reducer;
exports.counterActions = counterSlice.actions;
