const { INCREAMENT, DECREAMENT } = require("./actionTypes");

exports.increamentValue = (value = 1) => {
  return {
    type: INCREAMENT,
    payload: value,
  };
};

exports.decreamentValue = (value = 1) => {
  return {
    type: DECREAMENT,
    payload: value,
  };
};
