import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCH_USERS,
} from "../actions/asyncActionTypes";

const initialAsyncState = {
  users: [],
  loading: false,
  error: "",
};

export const asyncReducer = (state = initialAsyncState, action) => {
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
