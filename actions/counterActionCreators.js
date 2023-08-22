const { INCREAMENT, DECREAMENT } = require("./actionTypes");

exports.increamentValue = (value = 1) => {
  return {
    type: INCREAMENT,
    value: value,
  };
};

exports.decreamentValue = (value = 1) => {
  return {
    type: DECREAMENT,
    value: value,
  };
};
