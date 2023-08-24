import { INCREAMENT, DECREAMENT } from "../actions/counterActionTypes";

const initialValueState = {
  count: 1,
};

export const counterReducer = (state = initialValueState, action) => {
  switch (action.type) {
    case INCREAMENT:
      return { ...state, count: state.count + parseInt(action.payload) };
    case DECREAMENT:
      return { ...state, count: state.count - parseInt(action.payload) };
    default:
      return state;
  }
};
