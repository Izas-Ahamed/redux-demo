const { INCREAMENT, DECREAMENT } = require("../actions/actionTypes");

const initialValueState = {
  value: 1,
};

//for the sake of demo we splitting into two reducers
exports.counterReducer = (state = initialValueState, action) => {
  switch (action.type) {
    case INCREAMENT:
      return { ...state, value: state.value + action.value };
    case DECREAMENT:
      return { ...state, value: state.value - action.value };
    default:
      return state;
  }
};
