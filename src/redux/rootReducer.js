import { combineReducers } from "redux";
import { counterReducer } from "./counter/reducers/counterReducer";
import { wordsReducer } from "./words/wordsReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  words: wordsReducer,
});

export default rootReducer;
