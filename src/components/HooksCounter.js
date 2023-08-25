import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreamentValue,
  increamentValue,
} from "../redux/counter/actions/counterActionCreators";

function HooksCounter() {
  const [input, setInput] = useState();

  //using useSelector hooks we getting state
  const { count } = useSelector((state) => state.count);
  //getting dispatch function using useDispatch hook
  const dispatch = useDispatch();

  return (
    <div>
      <p>Using Hooks : Count: {count}</p>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => dispatch(increamentValue(input))}>Add</button>
      <button onClick={() => dispatch(decreamentValue(input))}>Subtract</button>
    </div>
  );
}

export default HooksCounter;
