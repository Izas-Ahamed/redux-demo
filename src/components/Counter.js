import { useDispatch, useSelector } from "react-redux";
import { decreament, increament } from "../features/counter/counterSlice";
import { useState } from "react";

export const Counter = () => {
  const { count } = useSelector((state) => state.count);
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count : {count} </h1>
      <input type="number" onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => dispatch(increament(input))}>Add</button>
      <br />
      <button onClick={() => dispatch(decreament(input))}>Subtract -1</button>
    </div>
  );
};
