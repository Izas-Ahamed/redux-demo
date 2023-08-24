import { ADD_WORD, REMOVE_WORD } from "./wordsActionTypes";

export const addWord = (word = "default") => {
  return { type: ADD_WORD, payload: word };
};

export const removeWord = (index) => {
  return { type: REMOVE_WORD, payload: index };
};
