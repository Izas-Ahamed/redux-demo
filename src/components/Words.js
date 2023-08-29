import React, { useState } from "react";
import { addWord, removeWord } from "../features/words/wordSlice";
import { useDispatch, useSelector } from "react-redux";

export const Words = () => {
  const [wordInput, setWordInput] = useState();
  const { words } = useSelector((state) => state.words);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Adding word makes count +1 (extra reducer)</p>
      <input
        type="text"
        onChange={(e) =>
          setWordInput(e.target.value.length > 0 ? e.target.value : undefined)
        }
      ></input>
      <button onClick={() => dispatch(addWord(wordInput))}>Add Word</button>
      <ul>
        {words.map((word, index) => (
          <li key={index}>
            {word}
            <button onClick={() => dispatch(removeWord(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
