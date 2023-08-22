const { ADD_WORD } = require("./actionTypes");

exports.addWord = (word = "defaultWord") => {
  return {
    type: ADD_WORD,
    word: word,
  };
};
