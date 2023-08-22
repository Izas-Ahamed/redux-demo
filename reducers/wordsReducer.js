const { ADD_WORD } = require("../actions/actionTypes");

const intialWordsState = {
  words: [],
};
exports.wordsReducer = (state = intialWordsState, action) => {
  switch (action.type) {
    case ADD_WORD:
      return { ...state, words: [...state.words, action.word] };

    default:
      return state;
  }
};
