import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: [],
};

const wordSlice = createSlice({
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

export default wordSlice.reducer;
export const { addWord } = wordSlice.actions;
