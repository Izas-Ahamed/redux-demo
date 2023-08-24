import {
  FETCH_USERS,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from "../actions/asyncActionTypes";
import axios from "axios";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
  };
};

export const fetchSuccess = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error.message,
  };
};

export const fetchUsersFromAPI = () => {
  return (dispatch) => {
    dispatch(fetchUsers());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        dispatch(fetchSuccess(data));
      })
      .catch((error) => dispatch(fetchError(error)));
  };
};
