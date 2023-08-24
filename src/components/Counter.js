import React, { useState } from "react";
import { connect } from "react-redux";
import {
  decreamentValue,
  increamentValue,
} from "../redux/counter/actions/counterActionCreators";

function Counter({ totalCount, increamentValue, decreamentValue }) {
  const [increamentInput, setIncreamentInput] = useState();
  const [decreamentInput, setDecreamentInput] = useState();

  return (
    <div>
      <h1>Count : {totalCount.count} </h1>
      <input
        type="number"
        onChange={(e) => setIncreamentInput(e.target.value)}
      ></input>
      <button onClick={() => increamentValue(increamentInput)}>Add</button>
      <br />
      <input
        type="number"
        onChange={(e) => setDecreamentInput(e.target.value)}
      ></input>
      <button onClick={() => decreamentValue(decreamentInput)}>Subtract</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalCount: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increamentValue: (value) => dispatch(increamentValue(value)),
    decreamentValue: (value) => dispatch(decreamentValue(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
