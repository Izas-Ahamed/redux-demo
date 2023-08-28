const { configureStore } = require("@reduxjs/toolkit");
const { counterReducer } = require("../features/counter/counterSlice");
const { wordsReducer } = require("../features/words/wordSlice");
const { userReducer } = require("../features/users/userSlice");
const logger = require("redux-logger").default;
const store = configureStore({
  reducer: {
    count: counterReducer,
    words: wordsReducer,
    users: userReducer,
  },
  //along with default middlewares we concating our desired middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  //
  //we can also use like this if we only need these middlewares than defaults
  //middleware:[logger]
});

module.exports = store;
