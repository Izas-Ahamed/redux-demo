const { INCREAMENT, DECREAMENT } = require("../actions/actionTypes");
const { produce } = require("immer");

const initialValueState = {
  value: 1,
};

//for the sake of demo we splitting into two reducers
exports.counterReducer = (state = initialValueState, action) => {
  switch (action.type) {
    case INCREAMENT:
      return produce(state, (draft) => {
        draft.value = draft.value + action.payload;
      });
    case DECREAMENT:
      return produce(state, (draft) => {
        draft.value = draft.value - action.payload;
      });
    default:
      return state;
  }
};
