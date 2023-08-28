const { createSlice } = require("@reduxjs/toolkit");

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
});

exports.counterReducer = counterSlice.reducer;
exports.counterActions = counterSlice.actions;
