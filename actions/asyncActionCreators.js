const { FETCH_USERS, FETCH_SUCCESS, FETCH_ERROR } = require("./actionTypes");

exports.fetchUsers = () => {
  return {
    type: FETCH_USERS,
  };
};

exports.fetchSuccess = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};

exports.fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error.message,
  };
};
