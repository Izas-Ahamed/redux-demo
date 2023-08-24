import { combineReducers } from "redux";
import { counterReducer } from "./counter/reducers/counterReducer";
import { wordsReducer } from "./words/reducer/wordsReducer";
import { asyncReducer } from "./async/reducer/asyncReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  words: wordsReducer,
  users: asyncReducer,
});

export default rootReducer;
