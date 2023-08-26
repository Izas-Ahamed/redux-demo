import { INCREAMENT, DECREAMENT } from "../actions/counterActionTypes";
import { produce } from "immer";
const initialValueState = {
  count: 1,
};

//added immer demo
export const counterReducer = (state = initialValueState, action) => {
  switch (action.type) {
    case INCREAMENT:
      return produce(state, (draft) => {
        draft.count = draft.count + action.payload;
      });
    case DECREAMENT:
      return produce(state, (draft) => {
        draft.count = draft.count - action.payload;
      });
    default:
      return state;
  }
};
