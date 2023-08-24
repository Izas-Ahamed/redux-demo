import { ADD_WORD, REMOVE_WORD } from "../actions/wordsActionTypes";

const initialWordsState = {
  words: [],
};

export const wordsReducer = (state = initialWordsState, action) => {
  switch (action.type) {
    case ADD_WORD:
      return { ...state, words: [...state.words, action.payload] };
    case REMOVE_WORD:
      return {
        ...state,
        words: state.words.filter((word, index) => index != action.payload),
      };
    default:
      return state;
  }
};
