const { configureStore } = require("@reduxjs/toolkit");
const { counterReducer } = require("../features/counter/counterSlice");

const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});

module.exports = store;
