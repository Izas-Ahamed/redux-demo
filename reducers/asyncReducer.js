const {
  FETCH_SUCCESS,
  FETCH_USERS,
  FETCH_ERROR,
} = require("../actions/actionTypes");

const initialAsyncState = {
  users: [],
  loading: false,
  error: "",
};

exports.asyncReducer = (state = initialAsyncState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, users: action.payload, loading: false };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
