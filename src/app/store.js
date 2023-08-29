import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import wordsReducer from "../features/words/wordSlice";
import userReducer from "../features/users/userSlice";
import logger from "redux-logger";
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

export default store;
