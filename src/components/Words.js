import React, { useState } from "react";
import { addWord, removeWord } from "../redux/words/wordsActionCreators";
import { connect } from "react-redux";

function Words({ allWords, addWord, removeWord }) {
  const [wordInput, setWordInput] = useState();
  return (
    <div>
      <input
        type="text"
        onChange={(e) =>
          setWordInput(e.target.value.length > 0 ? e.target.value : undefined)
        }
      ></input>
      <button onClick={() => addWord(wordInput)}>Add Word</button>
      <ul>
        {allWords.words.map((word, index) => (
          <li key={index}>
            {word}
            <button onClick={() => removeWord(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allWords: state.words,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWord: (word) => dispatch(addWord(word)),
    removeWord: (word) => dispatch(removeWord(word)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Words);
